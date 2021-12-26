import { Cred } from "./spotifyApiProvider";
import fs from "fs-jetpack";

export const setUserData = (cred: Cred & { refreshToken: string }) => {
  fs.write("user.json", cred);
};
