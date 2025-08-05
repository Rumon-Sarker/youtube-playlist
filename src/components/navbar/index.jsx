import { Button, Container, Stack } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import PlaylistForm from '../playlist-form';

const Navbar = ({ getPlaylistById }) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const getPlaylistId = (playlistId) => {
        getPlaylistById(playlistId)
    }


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" color='default'>
                <Container maxWidth="lg" sx={{ py: 2 }}>
                    <Toolbar>
                        <Stack spacing={1} sx={{ flexGrow: 1 }} >
                            <Typography variant="h6" sx={{ flexGrow: 1 }}>
                                YouTube PalyList
                            </Typography>
                            <Typography variant='body1'>
                                by Rumon Sarker
                            </Typography>
                        </Stack>
                        <Button onClick={handleClickOpen} variant='contained'>
                            Add Playlist Id
                        </Button>
                    </Toolbar>
                    <PlaylistForm open={open} handleClose={handleClose} getPlaylistId={getPlaylistId} />
                </Container>
            </AppBar>
        </Box >
    );
}
export default Navbar;