import cron from "node-cron";

import apodToday from "./apod.js";
import hooks from "./hooks.js";
import { createEmbed, createWebhookBody, postWebhook } from "./hookManager.js";

cron.schedule(process.env.CRON_TRIGGER, () => {
    apodToday().then(async (apodData) => {
        const embed = createEmbed(apodData);
        const webhookBody = createWebhookBody(embed);

        await postWebhook(hooks, webhookBody);
    });
});
