import { getSpotifyApi } from "./utils/spotifyApiProvider";
import { getUserData } from "./utils/userData";

export const start = async (interval = 5000) => {
  const user = getUserData();

  if (!user) {
    console.error("You need to login before using this command.");
  }

  const spotfyApi = getSpotifyApi(user);

  setInterval(async () => {
    const {
      body: { access_token },
    } = await spotfyApi.refreshAccessToken();
    spotfyApi.setAccessToken(access_token);

    const {
      body: { item },
    } = await spotfyApi.getMyCurrentPlayingTrack();

    if (!item) {
      console.log("Not playing ");
      return;
    }

    console.log(item.name);
  }, interval);
};
