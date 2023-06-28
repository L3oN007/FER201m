import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Dashboard = () => {
    const [films, setFilms] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedFilm, setSelectedFilm] = useState(null);
    const [filmData, setFilmData] = useState({
        name: '',
        year: '',
        nation: '',
        director: '',
        image: '',
        description: '',
        youtubeURL: '',
        id: '',
    });

    useEffect(() => {
        fetch('https://648867740e2469c038fda6cc.mockapi.io/Films')
            .then(response => response.json())
            .then(data => setFilms(data))
            .catch(error => console.error(error));
    }, []);

    const handleDelete = (id) => {
        fetch(`https://648867740e2469c038fda6cc.mockapi.io/Films/${id}`, {
            method: 'DELETE'
        })
            .then(response => {
                if (response.ok) {
                    setFilms(prevFilms => prevFilms.filter(film => film.id !== id));
                } else {
                    console.error('Failed to delete the film');
                }
            })
            .catch(error => console.error(error));
    };

    const handleEdit = (film) => {
        setSelectedFilm(film);
        setFilmData(film);
        setIsModalOpen(true);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFilmData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleUpdate = () => {
        // Make API call to update film data with filmData state
        // Replace the API endpoint and method as per your requirements
        fetch(`https://648867740e2469c038fda6cc.mockapi.io/Films/${selectedFilm.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(filmData),
        })
            .then(response => {
                if (response.ok) {
                    // Update the film in the films state with the updated filmData
                    setFilms(prevFilms => prevFilms.map(film => {
                        if (film.id === selectedFilm.id) {
                            return { ...film, ...filmData };
                        }
                        return film;
                    }));
                    setIsModalOpen(false);
                } else {
                    console.error('Failed to update the film');
                }
            })
            .catch(error => console.error(error));
    };

    return (
        <>
            <h1 className='dashboard-title'>Films Dashboard</h1>
            <table className="movie-table">
                <tbody>
                    <tr>
                        <th>Poster</th>
                        <th>Name</th>
                        <th>Year</th>
                        <th>Nation</th>
                        <th>Director</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                    {films.map(film => (
                        <tr key={film.id}>
                            <td>
                                <img src={film.image} alt="Film Poster" />
                            </td>
                            <td>{film.name}</td>
                            <td>{film.year}</td>
                            <td>{film.nation}</td>
                            <td>{film.director}</td>
                            <td className="des">{film.description}</td>
                            <td className="text-end p-3">
                                <button
                                    className="btn btn-icon btn-pills btn-soft-success"
                                    onClick={() => handleEdit(film)}
                                >
                                    <i className="uil uil-pen" />
                                </button>
                                <button
                                    className="btn btn-icon btn-pills btn-soft-danger"
                                    onClick={() => handleDelete(film.id)}
                                >
                                    <i className="uil uil-trash" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                    <Typography variant="h6" component="h2">
                        Edit Film
                    </Typography>
                    <TextField
                        label="Name"
                        name="name"
                        value={filmData.name}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Year"
                        name="year"
                        value={filmData.year}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Nation"
                        name="nation"
                        value={filmData.nation}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Director"
                        name="director"
                        value={filmData.director}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Image"
                        name="image"
                        value={filmData.image}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Description"
                        name="description"
                        value={filmData.description}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="YouTube URL"
                        name="youtubeURL"
                        value={filmData.youtubeURL}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                    />
                    <Button onClick={handleUpdate} variant="contained">
                        Update
                    </Button>
                </Box>
            </Modal>
        </>
    );
}

export default Dashboard;
