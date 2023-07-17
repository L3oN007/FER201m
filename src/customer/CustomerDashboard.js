import React, { useEffect, useState } from 'react';

export default function CustomerDashboard() {
    const [birds, setBirds] = useState([]);
    const [LoginUser, setLoginUser] = useState({});
    const [user, setUser] = useState([]);
    const [birdId, setBirdId] = useState('');
    const [apps, setBirdApps] = useState([]);

    useEffect(() => {
        const storedLoginData = localStorage.getItem('loginData');
        const loginData = JSON.parse(storedLoginData);
        if (storedLoginData) {
            setLoginUser(loginData.user);
            fetch(`https://64b0cbc3062767bc48252f14.mockapi.io/user/${loginData.user.sub}`)
                .then(response => response.json())
                .then(data => setUser(data))
                .catch(error => console.error(error));
        }
        fetch(`https://64b0cbc3062767bc48252f14.mockapi.io/user/${loginData.user.sub}/bird`)
            .then(response => response.json())
            .then(data => setBirds(data))
            .catch(error => console.error(error));
    }, []);

    const cancelAppointment = (appointmentId, birdId) => {
        fetch(`https://64b0cbc3062767bc48252f14.mockapi.io/user/${LoginUser.sub}/bird/${birdId}/app/${appointmentId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status: 'canceled' }),
        })
            .then(response => response.json())
            .then(() => {
                window.alert('Appointment canceled successfully');
                fetch(`https://64b0cbc3062767bc48252f14.mockapi.io/user/${LoginUser.sub}/bird`)
                    .then(response => response.json())
                    .then(data => setBirds(data))
                    .catch(error => console.error(error));
            })
            .catch(error => console.error(error));
    };
    

    return (
        <div className="col-md-7 col-lg-8 col-xl-9">
            <div className="card">
                <div className="card-body pt-0">
                    <div className="tab-content pt-0">
                        <div id="pat_appointments" className="tab-pane fade show active">
                            <div className="card card-table mb-0">
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-hover table-center mb-0">
                                            <thead>
                                                <tr>
                                                    <th>Appointment Date</th>
                                                    <th>Appointment Time</th>
                                                    <th>Bird</th>
                                                    <th>Bird Breed</th>
                                                    <th>Service</th>
                                                    <th>Status</th>
                                                    <th />
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {birds.map(bird => (
                                                    bird.app.map(appt => (
                                                        <tr key={appt.id}>
                                                            <td>{appt.dateTime.split('T')[0]}</td>
                                                            <td>{appt.dateTime.split('T')[1]}</td>
                                                            <td>
                                                                <h2 className="table-avatar">
                                                                    <a className="avatar avatar-sm mr-2">
                                                                        <img className="avatar-img rounded-circle" src={bird.avatar} alt="User Image" />
                                                                    </a>
                                                                    <a href="">{bird.birdName}</a>
                                                                </h2>
                                                            </td>
                                                            <td>{bird.birdBreed}</td>
                                                            <td>{appt.service}</td>
                                                            <td>
                                                                {appt.status === 'checkout' && (
                                                                    <span className="badge badge-pill bg-purple-light">
                                                                        {appt.status}
                                                                    </span>
                                                                )}
                                                                {appt.status === 'canceled' && (
                                                                    <span className="badge badge-pill bg-danger-light">
                                                                        {appt.status}
                                                                    </span>
                                                                )}
                                                                {appt.status === 'complete' && (
                                                                    <span className="badge badge-pill bg-success-light">
                                                                        {appt.status}
                                                                    </span>
                                                                )}
                                                                {appt.status === 'checkin' && (
                                                                    <span className="badge badge-pill bg-primary-light">
                                                                        {appt.status}
                                                                    </span>
                                                                )}
                                                                {appt.status === 'processing' && (
                                                                    <span className="badge badge-pill bg-warning-light">
                                                                        {appt.status}
                                                                    </span>
                                                                )}
                                                            </td>
                                                            <td className="text-right">
                                                                {appt.status === 'processing' && (
                                                                    <div className="table-action">
                                                                        <button
                                                                            className="btn btn-sm bg-danger-light"
                                                                            onClick={() => cancelAppointment(appt.appId,bird.birdId)}
                                                                        >
                                                                            <i className="fa fa-times" /> Cancel
                                                                        </button>
                                                                    </div>
                                                                )}
                                                            </td>
                                                        </tr>
                                                    ))
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
