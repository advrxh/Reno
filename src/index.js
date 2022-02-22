import cron from "node-cron";

import apodToday from "./apod.js";
import { readFileSync } from "fs";
import { createEmbed, createWebhookBody, postWebhook } from "./hookManager.js";

cron.schedule(process.env.CRON_TRIGGER, () => {
    apodToday().then(async (apodData) => {
        const { hooks } = JSON.parse(readFileSync("hooks.json", "utf-8"));
        const embed = createEmbed(apodData);
        const webhookBody = createWebhookBody(embed);

        await postWebhook(hooks, webhookBody);
    });
});
