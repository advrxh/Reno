import fetch from "node-fetch";

export const createEmbed = (apodData) => {
    const today = new Date().toDateString();
    return [
        {
            title: `${apodData.title} - ${today}`,
            color: 736657,
            description: apodData.description,
            image: {
                url: apodData.image,
            },
            footer: {
                text: today,
                icon_url:
                    "https://github.com/AadilVarsh/Reno/raw/master/images/star.png",
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
        thumbnail: {
            url: "https://github.com/AadilVarsh/Reno/raw/master/images/star.png",
        },
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
            `[${new Date().toTimeString()}] WEBHOOK_ID[${
                hook.slice(8).split("/")[3]
            }] OK[${response.ok}] STATUS[${response.status}]`
        );
    }
};
