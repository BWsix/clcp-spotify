import express from "express";
import open from "open";
import { getAuthURL, getSpotifyApi } from "./utils/spotifyProvider";
import { Cred } from "./utils/types";
import { setUser } from "./utils/userData";

const app = express();

export const login = (cred: Cred) => {
  const spotifyApi = getSpotifyApi(cred);

  app.get("/callback", async ({ query }, res) => {
    const code = query.code as string;

    const {
      body: { refresh_token },
    } = await spotifyApi.authorizationCodeGrant(code);

    setUser({ ...cred, refreshToken: refresh_token });

    res.send("You can close this tab now.");

    process.exit();
  });

  app.listen(3000, () => {
    const url = getAuthURL(cred);
    open(url);
  });
};
