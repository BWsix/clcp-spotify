import { getSpotifyApi } from "./utils/spotifyProvider";

export const start = async () => {
  const spotifyApi = getSpotifyApi();

  const {
    body: { access_token },
  } = await spotifyApi.refreshAccessToken();
  spotifyApi.setAccessToken(access_token);

  const {
    body: { item },
  } = await spotifyApi.getMyCurrentPlayingTrack();

  if (!item) {
    console.log("Not playing");
    return;
  }

  console.log(item.name);
};
