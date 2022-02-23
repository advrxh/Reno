<div align="center"><img src="./images/star.png" width="128"/><br/><h1><b>Reno<b/></h1><h3>Daily Nasa APOD updates in your discord server!
</h3></div>

# Setup

-   Rename [`env.example`](./.env.example) to `.env`

    -   Obtain your `APOD_API_KEY` from [here](https://api.nasa.gov/)

-   Rename [`hooks.example.json`](./hooks.example.json) to `hooks.json`

    - Insert webhook links in here
        ```js
        {
        "hooks": [
            "https://discord.com/api/webhooks/00000000000/abc"
            ]
        }
        ```
- Install dependencies
    - ```bash 
      $ npm i 
      ```

- Run 

    - ```bash
      $ npm run start
      ```
