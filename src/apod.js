import fetch from "node-fetch";

const KEY = process.env.APOD_API_KEY;

const apodToday = async () => {
    const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${KEY}`
    ).then((r) => r.json());

    const { date, explanation, hdurl, title } = response;
    return {
        date: date,
        description: explanation,
        image: hdurl,
        title: title,
    };
};

export default apodToday;
