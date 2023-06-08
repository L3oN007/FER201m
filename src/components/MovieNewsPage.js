import { Container, Dialog, DialogContent, Grid, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import movieNews from './ListOfNews';

const MovieNewsPage = () => {
    const [selectedNews, setSelectedNews] = useState(null);

    const handleOpenPopup = (news) => {
        setSelectedNews(news);
    };

    const handleClosePopup = () => {
        setSelectedNews(null);
    };

    return (
        <Container maxWidth="lg" className="news-container">
            <Typography variant="h4" component="h1" className="news-title">
                Movie News
            </Typography>
            <Grid container spacing={2}>
                {movieNews.map((newsItem) => (
                    <Grid item xs={12} sm={6} key={newsItem.id}>
                        <Paper elevation={3} className="news-paper" onClick={() => handleOpenPopup(newsItem)}>
                            <img src={newsItem.image} alt={newsItem.title} className="news-image" />
                            <Typography variant="h6" component="h2" gutterBottom>
                                {newsItem.title}
                            </Typography>
                            <Typography variant="body2" color="#808080" className="news-date" gutterBottom>
                                {newsItem.date}
                            </Typography>
                            <Typography variant="body1" className="news-description">
                                {newsItem.description}
                            </Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>

            {/* Popup */}
            <Dialog open={selectedNews !== null} onClose={handleClosePopup} maxWidth="lg" fullWidth>
                {selectedNews && (
                    <DialogContent dividers sx={{ overflowY: 'auto' }}>
                        <Typography variant="h6" component="h2" gutterBottom>
                            {selectedNews.title}
                        </Typography>
                        <img src={selectedNews.image} alt={selectedNews.title} className="news-image" />
                        <Typography variant="body2" color="#808080" className="news-date" gutterBottom>
                            {selectedNews.date}
                        </Typography>
                        <Typography variant="body1">{selectedNews.description}</Typography>
                    </DialogContent>
                )}
            </Dialog>
        </Container>
    );
};

export default MovieNewsPage;
