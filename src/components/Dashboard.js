import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Dashboard = () => {
    const [films, setFilms] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isUpdateModal, setIsUpdateModal] = useState(false);
    const [updateFilmData, setUpdateFilmData] = useState({
        name: '',
        year: '',
        nation: '',
        director: '',
        image: '',
        description: '',
        youtubeURL: '',
    });
    const [addFilmData, setAddFilmData] = useState({
        name: '',
        year: '',
        nation: '',
        director: '',
        image: '',
        description: '',
        youtubeURL: '',
    });

    useEffect(() => {
        fetch('https://648867740e2469c038fda6cc.mockapi.io/Films')
            .then(response => response.json())
            .then(data => setFilms(data))
            .catch(error => console.error(error));
    }, []);

    const handleDelete = (id) => {
        fetch(`https://648867740e2469c038fda6cc.mockapi.io/Films/${id}`, {
            method: 'DELETE',
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
        setUpdateFilmData(film);
        setIsModalOpen(true);
        setIsUpdateModal(true);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (isUpdateModal) {
            setUpdateFilmData(prevData => ({ ...prevData, [name]: value }));
        } else {
            setAddFilmData(prevData => ({ ...prevData, [name]: value }));
        }
    };

    const handleUpdate = () => {
        // Make API call to update film data with updateFilmData state
        // Replace the API endpoint and method as per your requirements
        fetch(
            `https://648867740e2469c038fda6cc.mockapi.io/Films/${updateFilmData.id}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updateFilmData),
            }
        )
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    console.error('Failed to update the film');
                }
            })
            .then(data => {
                setFilms(prevFilms => {
                    const updatedFilms = prevFilms.map(film => {
                        if (film.id === data.id) {
                            return data;
                        }
                        return film;
                    });
                    return updatedFilms;
                });
                setIsModalOpen(false);
                setIsUpdateModal(false);
                setUpdateFilmData({
                    name: '',
                    year: '',
                    nation: '',
                    director: '',
                    image: '',
                    description: '',
                    youtubeURL: '',
                });
            })
            .catch(error => console.error(error));
    };

    const handleAdd = () => {
        // Make API call to add film data with addFilmData state
        // Replace the API endpoint and method as per your requirements
        fetch('https://648867740e2469c038fda6cc.mockapi.io/Films', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(addFilmData),
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    console.error('Failed to add the film');
                }
            })
            .then(data => {
                setFilms(prevFilms => [...prevFilms, data]);
                setIsModalOpen(false);
                setAddFilmData({
                    name: '',
                    year: '',
                    nation: '',
                    director: '',
                    image: '',
                    description: '',
                    youtubeURL: '',
                });
            })
            .catch(error => console.error(error));
    };

    const handleAddModalOpen = () => {
        setIsModalOpen(true);
        setIsUpdateModal(false);
        setUpdateFilmData({
            name: '',
            year: '',
            nation: '',
            director: '',
            image: '',
            description: '',
            youtubeURL: '',
        });
    };

    return (
        <>
            <h1 className="dashboard-title">Films Dashboard</h1>
            <Button variant="contained" onClick={handleAddModalOpen}>
                <i className="fa-solid fa-plus"></i> Add Film
            </Button>
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
                    {isUpdateModal ? (
                        // Update film popup
                        <>
                            <Typography variant="h6" component="h2">
                                Update Film
                            </Typography>
                            <TextField
                                label="Name"
                                name="name"
                                value={updateFilmData.name}
                                onChange={handleInputChange}
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="Year"
                                name="year"
                                value={updateFilmData.year}
                                onChange={handleInputChange}
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="Nation"
                                name="nation"
                                value={updateFilmData.nation}
                                onChange={handleInputChange}
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="Director"
                                name="director"
                                value={updateFilmData.director}
                                onChange={handleInputChange}
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="Image URL"
                                name="image"
                                value={updateFilmData.image}
                                onChange={handleInputChange}
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="Description"
                                name="description"
                                value={updateFilmData.description}
                                onChange={handleInputChange}
                                fullWidth
                                multiline
                                rows={4}
                                margin="normal"
                            />
                            <TextField
                                label="YouTube URL"
                                name="youtubeURL"
                                value={updateFilmData.youtubeURL}
                                onChange={handleInputChange}
                                fullWidth
                                margin="normal"
                            />
                            <Button variant="contained" onClick={handleUpdate}>
                                Update
                            </Button>
                        </>
                    ) : (
                        // Add film popup
                        <>
                            <Typography variant="h6" component="h2">
                                Add Film
                            </Typography>
                            <TextField
                                label="Name"
                                name="name"
                                value={addFilmData.name}
                                onChange={handleInputChange}
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="Year"
                                name="year"
                                value={addFilmData.year}
                                onChange={handleInputChange}
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="Nation"
                                name="nation"
                                value={addFilmData.nation}
                                onChange={handleInputChange}
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="Director"
                                name="director"
                                value={addFilmData.director}
                                onChange={handleInputChange}
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="Image URL"
                                name="image"
                                value={addFilmData.image}
                                onChange={handleInputChange}
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="Description"
                                name="description"
                                value={addFilmData.description}
                                onChange={handleInputChange}
                                fullWidth
                                multiline
                                rows={4}
                                margin="normal"
                            />
                            <TextField
                                label="YouTube URL"
                                name="youtubeURL"
                                value={addFilmData.youtubeURL}
                                onChange={handleInputChange}
                                fullWidth
                                margin="normal"
                            />
                            <Button variant="contained" onClick={handleAdd}>
                                Add
                            </Button>
                        </>
                    )}
                </Box>
            </Modal>
        </>
    );
};

export default Dashboard;
