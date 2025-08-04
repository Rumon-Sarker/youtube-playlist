import axios from "axios";

const key = "AIzaSyDa725veZuZUcMbPgGmueYBQSobWXg0zZ0";

const getPlayList = async (playlistId, pageToken = "", result = []) => {
  const URL = `https://www.googleapis.com/youtube/v3/playlistItems?key=${key}&part=id,contentDetails,snippet&maxResults=50&playlistId=${playlistId}&pageToken=${pageToken}`;
  //   console.log("playlist id is", playlistId);

  const { data } = await axios.get(URL);
  result = [...result, ...data.items];
  if (data.nextPageToken) {
    result = getPlayList(playlistId, data.nextPageToken, result);
  }
  return result;
};

export default getPlayList;
