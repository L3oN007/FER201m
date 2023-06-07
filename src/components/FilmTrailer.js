import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import React, { useState } from 'react';

const FilePopup = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="contained" onClick={handleClickOpen}>
                Open Popup
            </Button>
            <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
                <DialogTitle>File Information</DialogTitle>
                <DialogContent className="popup-content">
                    <div className="file-info">
                        <Typography variant="body1">File Name: My File</Typography>
                        <Typography variant="body1">File Size: 10 MB</Typography>
                        <Typography variant="body1">File Type: Video</Typography>
                    </div>
                    <div className="youtube-trailer">
                        <Typography variant="body1">YouTube Trailer:</Typography>
                        <div className="iframe-container">
                            <iframe
                                title="YouTube video player"
                                src="https://www.youtube.com/embed/TUJDR2HDzQ8"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default FilePopup;
