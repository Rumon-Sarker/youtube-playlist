import { useState } from "react";
import getPlayList from "../api";

const usePlaylists = () => {
  const [state, setState] = useState({
    playlists: {},
    recentPlaylists: [],
    favorites: [],
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false)

  const getPlaylistById = async (playlistId, force = false) => {
    if (state.playlists[playlistId] && !force) {
      return;
    }
    setLoading(true)

    try {

      const playlist = await getPlayList(playlistId)
      setError("")
      setState((prev) => ({
        ...prev,
        playlists: {
          ...prev.playlists,
          [playlistId]: playlist
        }
      }))
    } catch (e) {
      setError(e.response?.data?.error?.message || "Somethisng went wrong")
    } finally {
      setLoading(false)
    }
  };

  const addToFavorites = (playlistId) => {
    setState((prev) => ({
      ...prev,
      favorites: [...prev, playlistId],
    }));
  };

  const addToRecent = (playlistId) => {
    setState((prev) => ({
      ...prev,
      recentPlaylists: [...prev, playlistId],
    }));
  };

  const getPlayListsByIds = (ids = []) => {
    return ids?.map((id) => state?.playlists[id]);
  };

  return {
    playlists: state.playlists,
    favorites: getPlayListsByIds(state.favorites),
    recentPlaylists: getPlayListsByIds(state.recentPlaylists),
    getPlaylistById,
    addToRecent,
    addToFavorites,
    error,
    loading
  };
};
export default usePlaylists;
