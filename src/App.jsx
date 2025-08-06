import { Container, CssBaseline, Grid, Typography } from "@mui/material";
import Navbar from "./components/navbar";
import usePlaylists from "./hooks/usePlayLists";
import PlaylistCard from "./components/playlist-card-item";
import { BrowserRouter, Route, Routes, useParams } from "react-router";

const HomePage = ({ playlistArry }) => {
  return (
    <>
      {playlistArry?.length > 0 && (
        <Grid container alignItems="stretch" justifyContent={"center"}>
          {playlistArry?.map((items) => (
            <Grid
              items
              key={items.playlistId}
              xs={12}
              md={6}
              lg={4}
              sx={{ my: 1, width: 350 }}
            >
              <PlaylistCard
                playlistTitle={items?.playlistTitle}
                channelTitle={items?.channelTitle}
                playlistId={items?.playlistId}
                playlistThumbnail={items?.playlistThumbnail?.url}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

const NotFoundPage = () => {
  return (
    <Container sx={{ maxWidth: "lg", mt: 40 }}>
      <Typography variant="h3" fontWeight={"lg"} textAlign={"center"}>
        404 Not Found This page
      </Typography>
    </Container>
  );
};

const VideoPalyPage = ({ playlists }) => {
  const { playlistId } = useParams();

  const playListData = playlists[playlistId];
  console.log("playListData", playListData);
  return (
    <Container sx={{ maxWidth: "lg", mt: 40 }}>
      <img src={playListData.playlistThumbnail.url} alt="" />
      <Typography variant="h3" fontWeight={"lg"} textAlign={"center"}>
        {playListData?.channelTitle}
      </Typography>
      <Typography variant="body2" fontWeight={"lg"} textAlign={"center"}>
        {playListData?.playlistDescription}
      </Typography>
    </Container>
  );
};

const App = () => {
  const { playlists, getPlaylistById, loading, error } = usePlaylists();
  // console.log(" Apps data playlists", playlists);
  console.log("loading", loading);
  console.log("error", error);

  const playlistArry = Object.values(playlists);

  return (
    <BrowserRouter>
      <CssBaseline />
      <Container maxWidth={"lg"} sx={{ my: 16 }}>
        <Navbar getPlaylistById={getPlaylistById} />
        <Routes>
          <Route path="/" element={<HomePage playlistArry={playlistArry} />} />
          <Route
            path="/VideoPalyPage/:playlistId"
            element={<VideoPalyPage playlists={playlists} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
