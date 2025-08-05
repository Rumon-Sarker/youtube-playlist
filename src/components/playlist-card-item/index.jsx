import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { PlayCircle, PlayCircleOutline } from '@mui/icons-material';
import { Box, Button, Stack } from '@mui/material';



const PlaylistCard = ({ playlistTitle, channelTitle, playlistThumbnail }) => {


    return (
        <Card sx={{ maxWidth: 345 }}>

            <CardMedia
                component="img"
                height="194"
                image={playlistThumbnail}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant='h6'>
                    {`${playlistTitle.length > 50 ? playlistTitle.substr(0, 50) + "..." : playlistTitle}`}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {(channelTitle)}.
                </Typography>
            </CardContent>
            <Box sx={{ flexGrow: 1 }}></Box>
            <CardActions disableSpacing>
                <Button>
                    <Stack direction={"row"} spacing={3} alignItems={"center"}>
                        <PlayCircleOutline />
                        <Typography variant='body2' fontWeight={600}>
                            Play
                        </Typography>
                        Play
                    </Stack>
                </Button>

            </CardActions>

        </Card>
    );
}

export default PlaylistCard;