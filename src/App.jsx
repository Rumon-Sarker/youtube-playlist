import { useEffect } from "react";

import usePlaylists from "./hooks/usePlayLists";

const App = () => {
  const { getPlaylistById, playlists } = usePlaylists();

  useEffect(() => {
    getPlaylistById("PL_XxuZqN0xVD0op-QDEgyXFA4fRPChvkl");
  }, []);

  console.log("State data is", playlists);
  return (
    <div>
      <h1>This is home componet </h1>
    </div>
  );
};

export default App;
