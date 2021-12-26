import fs from "fs-jetpack";
import { ExtendedCred } from "./types";

export const setUser = (cred: ExtendedCred) => {
  fs.write("user.json", cred);
};
