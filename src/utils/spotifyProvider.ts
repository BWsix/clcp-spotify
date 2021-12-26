import SpotifyWebApi from "spotify-web-api-node";
import { Cred } from "./types";

export const getSpotifyApi = (cred: Cred) => {
  const spotifyApi = new SpotifyWebApi({
    ...cred,
    redirectUri: "http://localhost:3000/callback",
  });
  return spotifyApi;
};

export const getAuthURL = (cred: Cred) => {
  const spotifyApi = getSpotifyApi(cred);

  const url = spotifyApi.createAuthorizeURL(
    ["user-read-currently-playing"],
    "state",
  );

  return url;
};
