import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function CustomerBirdList() {
    const [birds, setBirds] = useState([]);
    const [user, setUser] = useState({});

    useEffect(() => {
        const storedLoginData = localStorage.getItem('loginData');
        if (storedLoginData) {
            const loginData = JSON.parse(storedLoginData);
            setUser(loginData.user);

            fetch(`https://64b0cbc3062767bc48252f14.mockapi.io/user/${loginData.user.sub}/bird`)
                .then(response => response.json())
                .then(data => setBirds(data))
                .catch(error => console.error(error));
        }
    }, []);

    const deleteBird = (birdId) => {
        fetch(`https://64b0cbc3062767bc48252f14.mockapi.io/user/${user.sub}/bird/${birdId}`, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(() => {
                // Remove the deleted bird from the state
                setBirds(prevBirds => prevBirds.filter(bird => bird.birdId !== birdId));
                // Display success message
                window.alert('Delete bird successfully!');
                // Fetch the updated bird list
                getBirds();
            })
            .catch(error => console.error(error));
    };

    const getBirds = () => {
        fetch(`https://64b0cbc3062767bc48252f14.mockapi.io/user/${user.sub}/bird`)
            .then(response => response.json())
            .then(data => setBirds(data))
            .catch(error => console.error(error));
    };

    return (
        <div className="col-md-7 col-lg-8 col-xl-9">
            <div className="card">
                <div className="card-body pt-0">
                    {/* Tab Menu */}
                    <nav className="user-tabs mb-4">
                        <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    href="#pat_appointments"
                                    data-toggle="tab"
                                >
                                    My Birds
                                </a>
                            </li>
                        </ul>
                    </nav>
                    {/* /Tab Menu */}
                    {/* Tab Content */}
                    <div className="tab-content pt-0">
                        {/* Appointment Tab */}
                        <div id="pat_appointments" className="tab-pane fade show active">
                            <div className="card card-table mb-0">
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-hover table-center mb-0">
                                            <thead>
                                                <tr>
                                                    <th>Bird</th>
                                                    <th>Breed</th>
                                                    <th>Hatch Day</th>
                                                    <th>Sex</th>
                                                    <th>Weight</th>
                                                    <th>Micro Chip</th>
                                                    <th />
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {birds.map(bird => (
                                                    <tr key={bird.birdId}>
                                                        <td>
                                                            <h2 className="table-avatar">
                                                                <a className="avatar avatar-sm mr-2">
                                                                    <img
                                                                        className="avatar-img rounded-circle"
                                                                        src={bird.avatar}
                                                                        alt={bird.birdName}
                                                                    />
                                                                </a>
                                                                <a>{bird.birdName}</a>
                                                            </h2>
                                                        </td>
                                                        <td>{bird.birdBreed}</td>
                                                        <td>{bird.hatchDate}</td>
                                                        <td>{bird.sex ? 'Male' : 'Female'}</td>
                                                        <td>{bird.weight} g</td>
                                                        <td>{bird.microchip}</td>
                                                        <td className="text-right">
                                                            <div className="table-action">
                                                                <a
                                                                    href="bird-details.html"
                                                                    className="btn btn-sm bg-info-light"
                                                                >
                                                                    <i className="far fa-eye" /> View
                                                                </a>
                                                                <button
                                                                    className="btn btn-sm bg-danger-light"
                                                                    onClick={() => deleteBird(bird.birdId)}
                                                                >
                                                                    <i className="far fa-trash-alt" /> Delete
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Appointment Tab */}
                    </div>
                    <Link to='/customer/add-bird'>
                        <button className="add-more" >
                            Add more+
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
