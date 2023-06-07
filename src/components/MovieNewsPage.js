import { Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import movieNews from './ListOfNews';

const MovieNewsPage = () => {
    return (
        <Container maxWidth="lg" className="news-container">
            <Typography variant="h4" component="h1" className="news-title">
                Movie News
            </Typography>
            <Grid container spacing={2}>
                {movieNews.map((newsItem) => (
                    <Grid item xs={12} sm={6} key={newsItem.id}>
                        <Paper elevation={3} className="news-paper">
                            <img src={newsItem.image} alt={newsItem.title} className="news-image" />
                            <Typography variant="h6" component="h2" gutterBottom>
                                {newsItem.title}
                            </Typography>
                            <Typography variant="body2" color="#808080" gutterBottom>
                                {newsItem.date}
                            </Typography>
                            <Typography variant="body1">{newsItem.description}</Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default MovieNewsPage;
