import React, { useEffect, useState } from 'react';

const Dashboard = () => {
    const [films, setFilms] = useState([]);

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
                    // Remove the deleted film from the films state
                    setFilms(prevFilms => prevFilms.filter(film => film.id !== id));
                } else {
                    console.error('Failed to delete the film');
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
                                    data-bs-toggle="modal"
                                    data-bs-target="#editprofile"
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
        </>
    );
}

export default Dashboard;
