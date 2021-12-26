import SpotifyWebApi from "spotify-web-api-node";

export type Cred = {
  clientId: string;
  clientSecret: string;
};

const redirectUri = "http://localhost:3000/callback/";

export const getSpotifyApi = (cred: Cred) => {
  const { clientId, clientSecret } = cred;

  const spotifyApi = new SpotifyWebApi({
    clientId,
    clientSecret,
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
