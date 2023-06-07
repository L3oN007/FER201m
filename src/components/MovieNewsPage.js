import { Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const styles = {
    container: {
        marginTop: '1.5rem',
        marginBottom: '1.5rem',
    },
    paper: {
        padding: '1rem',
    },
    title: {
        marginBottom: '1rem',
    },
    newsItem: {
        marginBottom: '2rem',
    },
    image: {
        width: '100%',
        height: '300px', // Update the height to your desired value
        objectFit: 'cover',
        marginBottom: '1rem',
    },
};

const MovieNewsPage = () => {
    const movieNews = [
        {
            id: 1,
            title: 'New Netflix Original Movie Released',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec sapien quis lorem feugiat volutpat.',
            date: 'June 5, 2023',
            image: './assets/images/avatar.jpg',
        },
        {
            id: 2,
            title: 'Exciting Sequel Announced for Popular Movie Franchise',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec sapien quis lorem feugiat volutpat.',
            date: 'June 3, 2023',
            image: 'https://example.com/image2.jpg',
        },
        // Add more news items here
    ];

    return (
        <Container maxWidth="lg" style={styles.container}>
            <Typography variant="h4" component="h1" style={styles.title}>
                Movie News
            </Typography>
            <Grid container spacing={2}>
                {movieNews.map((newsItem) => (
                    <Grid item xs={12} sm={6} key={newsItem.id}>
                        <Paper elevation={3} style={styles.paper}>
                            <img src={newsItem.image} alt={newsItem.title} style={styles.image} />
                            <Typography variant="h6" component="h2" gutterBottom>
                                {newsItem.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" gutterBottom>
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
