import fetch from "node-fetch";

export const createEmbed = (apodData) => {
    return [
        {
            title: `${apodData.title} - ${apodData.date}`,
            color: 736657,
            description: apodData.description,
            image: {
                url: apodData.image,
            },
            footer: {
                text: `• Astronomy Picture of the day - ${apodData.date}`,
            },
        },
    ];
};

export const createWebhookBody = (embeds) => {
    const webhookBody = {
        username: "Reno",
        avatar_url:
            "https://github.com/AadilVarsh/Reno/raw/master/images/star.png",
        embeds: embeds,
    };
    return webhookBody;
};

export const postWebhook = async (hooks, webhookBody) => {
    for (var hook of hooks) {
        var response = await fetch(hook, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(webhookBody),
        }).then((response) => response);

        console.log(
            `[${new Date().toDateString()}] [${new Date().toTimeString()}] WEBHOOK_ID[${
                hook.slice(8).split("/")[3]
            }] OK[${response.ok}] STATUS[${response.status}]`
        );
    }
};
