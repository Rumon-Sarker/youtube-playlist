import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { PlayCircleOutline } from "@mui/icons-material";
import { Box, Button, Stack } from "@mui/material";
import { Link } from "react-router";

const PlaylistCard = ({
  playlistTitle,
  channelTitle,
  playlistThumbnail,
  playlistId,
}) => {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        margin: 2,
      }}
    >
      <CardMedia
        component="img"
        height="194"
        image={playlistThumbnail}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="h6">
          {`${
            playlistTitle.length > 50
              ? playlistTitle.substr(0, 50) + "..."
              : playlistTitle
          }`}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {channelTitle}.
        </Typography>
      </CardContent>
      <Box sx={{ flexGrow: 1 }}></Box>
      <CardActions disableSpacing>
        <Button to={`/VideoPalyPage/${playlistId}`} component={Link}>
          <Stack direction={"row"} spacing={3} alignItems={"center"}>
            <PlayCircleOutline />
            <Typography variant="body2" fontWeight={600}>
              Play
            </Typography>
          </Stack>
        </Button>
      </CardActions>
    </Card>
  );
};

export default PlaylistCard;
