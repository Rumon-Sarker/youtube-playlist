import { Container, CssBaseline, Grid } from "@mui/material";
import Navbar from "./components/navbar";
import usePlaylists from "./hooks/usePlayLists";
import PlaylistCard from "./components/playlist-card-item";

const App = () => {

  const { playlists, getPlaylistById, loading, error } = usePlaylists();
  // console.log(" Apps data playlists", playlists);
  console.log("loading", loading);
  console.log("error", error);

  const playlistArry = Object.values(playlists)

  return (
    <>
      <CssBaseline />
      <Container maxWidth={"lg"} sx={{ marginTop: 16 }}>
        <Navbar getPlaylistById={getPlaylistById} />
        <Grid container spacing={{ xs: 2, md: 4 }} >
          {playlistArry?.length > 0 && playlistArry?.map((items, index) => (
            <Grid item xs={12} md={6} lg={4} mb={3} >
              <PlaylistCard key={index} playlistTitle={items?.playlistTitle} channelTitle={items?.channelTitle} playlistThumbnail={items?.playlistThumbnail?.url} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default App;
