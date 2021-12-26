import fs from "fs-jetpack";
import { ExtendedCred } from "./types";

export const setUser = (cred: ExtendedCred) => {
  fs.write("user.json", cred);
};

export const getUser = () => {
  return fs.read("user.json", "json") as ExtendedCred;
};
