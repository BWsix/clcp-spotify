import express from "express";
import { getAuthUrl, getSpotifyApi } from "./utils/spotifyApiProvider";
import { Cred } from "./utils/types";
import { setUserData } from "./utils/userData";

const app = express();

export const login = async (cred: Cred) => {
  const spotifyApi = getSpotifyApi(cred);

  app.get("/callback", async ({ query }, res) => {
    const code = query.code as string;
    const {
      body: { refresh_token },
    } = await spotifyApi.authorizationCodeGrant(code);

    setUserData({ ...cred, refreshToken: refresh_token });

    res.send("You can close this page now.");
    process.exit();
  });

  app.listen(3000, () => {
    const url = getAuthUrl(cred);
    console.log(url);
  });
};
