import { useEffect, useState } from 'react';

export default function StaffDashboard() {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://64b0cbc3062767bc48252f14.mockapi.io/app');
            const data = await response.json();

            if (Array.isArray(data)) {
                setAppointments(data);
            } else {
                setAppointments([]);
            }
        } catch (error) {
            console.log(error);
            setAppointments([]);
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'checkout':
                return 'badge badge-pill bg-purple-light';
            case 'canceled':
                return 'badge badge-pill bg-danger-light';
            case 'complete':
                return 'badge badge-pill bg-success-light';
            case 'checkin':
                return 'badge badge-pill bg-primary-light';
            case 'processing':
                return 'badge badge-pill bg-warning-light';
            // Add a new status format and color here
            case 'newStatus':
                return 'badge badge-pill bg-custom-color';
            default:
                return '';
        }
    };

    const handleStatusUpdate = async (appId, newStatus) => {
        const confirmed = window.confirm(`Are you sure you want to update the status to ${newStatus}?`);

        if (confirmed) {
            const updatedAppointments = appointments.map((appointment) => {
                if (appointment.appId === appId) {
                    return {
                        ...appointment,
                        status: newStatus,
                    };
                }
                return appointment;
            });

            setAppointments(updatedAppointments);
        }
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
                                                    <th>App ID</th>
                                                    <th>App Time</th>
                                                    <th>Date and Time</th>
                                                    <th>Service</th>
                                                    <th>Description</th>
                                                    <th>Bird ID</th>
                                                    <th>Status</th>
                                                    <th>Update Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {appointments.length > 0 ? (
                                                    appointments.map((appointment) => (
                                                        <tr key={appointment.appId}>
                                                            <td>{appointment.appId}</td>
                                                            <td>{appointment.appTime}</td>
                                                            <td>{appointment.dateTime}</td>
                                                            <td>{appointment.service}</td>
                                                            <td>{appointment.description}</td>
                                                            <td>{appointment.birdId}</td>
                                                            <td>
                                                                <span className={getStatusColor(appointment.status)}>
                                                                    {appointment.status}
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <select
                                                                    value={appointment.status}
                                                                    onChange={(e) =>
                                                                        handleStatusUpdate(appointment.appId, e.target.value)
                                                                    }
                                                                >
                                                                    <option value="checkin">Checkin</option>
                                                                    <option value="checkout">Checkout</option>
                                                                    <option value="complete">Complete</option>
                                                                </select>
                                                            </td>
                                                        </tr>
                                                    ))
                                                ) : (
                                                    <tr>
                                                        <td colSpan="8">No appointments found</td>
                                                    </tr>
                                                )}
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
