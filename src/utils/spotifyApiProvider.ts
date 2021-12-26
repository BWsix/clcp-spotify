import SpotifyWebApi from "spotify-web-api-node";
import { Cred, ExtendedCred } from "./types";

const redirectUri = "http://localhost:3000/callback/";

export const getSpotifyApi = (cred: Cred | ExtendedCred) => {
  const spotifyApi = new SpotifyWebApi({
    ...cred,
    redirectUri,
  });

  return spotifyApi;
};

export const getAuthUrl = (cred: Cred) => {
  const spotifyApi = getSpotifyApi(cred);

  const url = spotifyApi.createAuthorizeURL(
    ["user-read-currently-playing"],
    "thisIsState",
  );

  return url;
};
