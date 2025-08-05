
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';

const PlaylistForm = ({ open, handleClose, getPlaylistId }) => {
    const [state, setState] = useState("")

    const handleSubmit = () => {
        // todo handale url later chaek
        if (!state) {
            alert("Invalid Set State")
        } else {
            getPlaylistId(state)
            setState("")
            handleClose()
        }

    }
    return (

        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Add New Playlist</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    To add a new playlist please insert the playlist id or playlist link.
                    Please make sure the link is correct. Otheryise we won't able to fetch
                    the playlist information.
                </DialogContentText>
                <form onSubmit={handleSubmit} id="subscription-form">
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        name="PlaylistId"
                        label="Playlist id"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setState(e.target.value)}
                    />
                </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSubmit}>
                    Submit
                </Button>
            </DialogActions>
        </Dialog>

    );
}
export default PlaylistForm;
