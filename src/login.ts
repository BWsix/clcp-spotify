import express from "express";
import { Cred, getAuthURL } from "./utils/spotifyProvider";

const app = express();

export const login = (cred: Cred) => {
  app.get("/callback", ({ query }, res) => {
    console.log(query.code);

    res.send("You can close this tab now.");

    process.exit();
  });

  app.listen(3000, () => {
    const url = getAuthURL(cred);
    console.log(url);
  });
};
