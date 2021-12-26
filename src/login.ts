import express from "express";
import { Cred, getAuthUrl } from "./utils/spotifyApiProvider";

const app = express();

export const login = async (cred: Cred) => {
  app.get("/callback", (req, res) => {
    //TODO do somethings with req and res
    process.exit();
  });

  app.listen(3000, () => {
    const url = getAuthUrl(cred);
    console.log(url);
  });
};
