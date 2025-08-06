import { useEffect, useState } from "react";
import getPlayList from "../api";
import storage from "../utils/Storage";

const INIT_STATE = {
  playlists: {},
  recentPlaylists: [],
  favorites: [],
};

const STORAGE_KEY = "youtube_playlist";

const usePlaylists = () => {
  const [state, setState] = useState(INIT_STATE);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const state = storage.get(STORAGE_KEY);
    if (state) {
      setState({ ...state });
    }
  }, []);

  useEffect(() => {
    if (state !== INIT_STATE) {
      storage.save(STORAGE_KEY, state);
    }
  }, [state]);

  const getPlaylistById = async (playlistId, force = false) => {
    if (state.playlists[playlistId] && !force) {
      return;
    }
    setLoading(true);

    try {
      const playlist = await getPlayList(playlistId);
      setError("");
      setState((prev) => ({
        ...prev,
        playlists: {
          ...prev.playlists,
          [playlistId]: playlist,
        },
      }));
    } catch (e) {
      setError(e.response?.data?.error?.message || "Somethisng went wrong");
    } finally {
      setLoading(false);
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
    loading,
  };
};
export default usePlaylists;
