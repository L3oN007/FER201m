import React, { useEffect, useState } from 'react';
export default function DoctorDashboard() {
    const [user, setUser] = useState({});

    useEffect(() => {
        const storedLoginData = localStorage.getItem('loginData');
        if (storedLoginData) {
            const loginData = JSON.parse(storedLoginData);
            setUser(loginData.user);
        }
    }, []);
    return (
        <>
            {/* Breadcrumb */}
            <div className="breadcrumb-bar">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-md-12 col-12">
                            <nav aria-label="breadcrumb" className="page-breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Dashboard
                                    </li>
                                </ol>
                            </nav>
                            <h2 className="breadcrumb-title">Dashboard</h2>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Breadcrumb */}
            {/* Page Content */}
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                            {/* Profile Sidebar */}
                            <div className="profile-sidebar">
                                <div className="widget-profile pro-widget-content">
                                    <div className="profile-info-widget">
                                        <a href="#" className="booking-doc-img">
                                            <img
                                                src={user.picture}
                                                alt="User Image"
                                            />
                                        </a>
                                        <div className="profile-det-info">
                                            <h3>{user.name}</h3>
                                            <div className="patient-details">
                                                <h5 className="mb-0">
                                                    BDS, MDS - Oral &amp; Maxillofacial Surgery
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dashboard-widget">
                                    <nav className="dashboard-menu">
                                        <ul>
                                            <li className="active">
                                                <a href="doctor-dashboard.html">
                                                    <i className="fas fa-columns" />
                                                    <span>Dashboard</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="appointments.html">
                                                    <i className="fas fa-calendar-check" />
                                                    <span>Appointments</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="my-patients.html">
                                                    <i className="fas fa-user-injured" />
                                                    <span>My Patients</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="schedule-timings.html">
                                                    <i className="fas fa-hourglass-start" />
                                                    <span>Schedule Timings</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="invoices.html">
                                                    <i className="fas fa-file-invoice" />
                                                    <span>Invoices</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="reviews.html">
                                                    <i className="fas fa-star" />
                                                    <span>Reviews</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="chat-doctor.html">
                                                    <i className="fas fa-comments" />
                                                    <span>Message</span>
                                                    <small className="unread-msg">23</small>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="doctor-profile-settings.html">
                                                    <i className="fas fa-user-cog" />
                                                    <span>Profile Settings</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="social-media.html">
                                                    <i className="fas fa-share-alt" />
                                                    <span>Social Media</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="doctor-change-password.html">
                                                    <i className="fas fa-lock" />
                                                    <span>Change Password</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="index.html">
                                                    <i className="fas fa-sign-out-alt" />
                                                    <span>Logout</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            {/* /Profile Sidebar */}
                        </div>
                        <div className="col-md-7 col-lg-8 col-xl-9">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card dash-card">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-12 col-lg-4">
                                                    <div className="dash-widget dct-border-rht">
                                                        <div className="circle-bar circle-bar1">
                                                            <div className="circle-graph1" data-percent={75}>
                                                                <img
                                                                    src="assets/img/icon-01.png"
                                                                    className="img-fluid"
                                                                    alt="patient"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="dash-widget-info">
                                                            <h6>Total Patient</h6>
                                                            <h3>1500</h3>
                                                            <p className="text-muted">Till Today</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 col-lg-4">
                                                    <div className="dash-widget dct-border-rht">
                                                        <div className="circle-bar circle-bar2">
                                                            <div className="circle-graph2" data-percent={65}>
                                                                <img
                                                                    src="assets/img/icon-02.png"
                                                                    className="img-fluid"
                                                                    alt="Patient"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="dash-widget-info">
                                                            <h6>Today Patient</h6>
                                                            <h3>160</h3>
                                                            <p className="text-muted">06, Nov 2019</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 col-lg-4">
                                                    <div className="dash-widget">
                                                        <div className="circle-bar circle-bar3">
                                                            <div className="circle-graph3" data-percent={50}>
                                                                <img
                                                                    src="assets/img/icon-03.png"
                                                                    className="img-fluid"
                                                                    alt="Patient"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="dash-widget-info">
                                                            <h6>Appoinments</h6>
                                                            <h3>85</h3>
                                                            <p className="text-muted">06, Apr 2019</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <h4 className="mb-4">Patient Appoinment</h4>
                                    <div className="appointment-tab">
                                        {/* Appointment Tab */}
                                        <ul className="nav nav-tabs nav-tabs-solid nav-tabs-rounded">
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link active"
                                                    href="#upcoming-appointments"
                                                    data-toggle="tab"
                                                >
                                                    Upcoming
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="#today-appointments"
                                                    data-toggle="tab"
                                                >
                                                    Today
                                                </a>
                                            </li>
                                        </ul>
                                        {/* /Appointment Tab */}
                                        <div className="tab-content">
                                            {/* Upcoming Appointment Tab */}
                                            <div
                                                className="tab-pane show active"
                                                id="upcoming-appointments"
                                            >
                                                <div className="card card-table mb-0">
                                                    <div className="card-body">
                                                        <div className="table-responsive">
                                                            <table className="table table-hover table-center mb-0">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Customer Name</th>
                                                                        <th>Appt Date</th>
                                                                        <th>Bird Name</th>
                                                                        <th>Bird Breed</th>
                                                                        <th className="text-center">Doctor</th>
                                                                        <th />
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            <h2 className="table-avatar">
                                                                                <a
                                                                                    href="patient-profile.html"
                                                                                    className="avatar avatar-sm mr-2"
                                                                                >
                                                                                    <img
                                                                                        className="avatar-img rounded-circle"
                                                                                        src="assets/img/patients/patient.jpg"
                                                                                        alt="User Image"
                                                                                    />
                                                                                </a>
                                                                                <a href="patient-profile.html">
                                                                                    Richard Wilson <span>#PT0016</span>
                                                                                </a>
                                                                            </h2>
                                                                        </td>
                                                                        <td>
                                                                            11 Nov 2019{" "}
                                                                            <span className="d-block text-info">
                                                                                7.00 AM
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <h2 className="table-avatar">
                                                                                <a
                                                                                    href="patient-profile.html"
                                                                                    className="avatar avatar-sm mr-2"
                                                                                >
                                                                                    <img
                                                                                        className="avatar-img rounded-circle"
                                                                                        src="assets/img/bird/bird-2.webp"
                                                                                        alt="User Image"
                                                                                    />
                                                                                </a>
                                                                                <a href="patient-profile.html">
                                                                                    Bird123 <span>#PT0016</span>
                                                                                </a>
                                                                            </h2>
                                                                        </td>
                                                                        <td>Parrot african</td>
                                                                        <td className="text-center">
                                                                            <div className="d-flex justify-content-center">
                                                                                <select
                                                                                    className="form-control select w-75"
                                                                                    disabled=""
                                                                                >
                                                                                    <option>Doctor 1</option>
                                                                                    <option>Doctor 2</option>
                                                                                    <option>Doctor 3</option>
                                                                                </select>
                                                                            </div>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <div className="table-action">
                                                                                <a
                                                                                    href="client-appointments-details-not-yet.html"
                                                                                    className="btn btn-sm bg-info-light"
                                                                                >
                                                                                    {" "}
                                                                                    <i className="far fa-eye" /> View{" "}
                                                                                </a>
                                                                                <a
                                                                                    href="add-prescription.html"
                                                                                    className="btn btn-sm bg-info-light"
                                                                                >
                                                                                    {" "}
                                                                                    <i className="fa fa-flask" /> Prescribe{" "}
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <h2 className="table-avatar">
                                                                                <a
                                                                                    href="patient-profile.html"
                                                                                    className="avatar avatar-sm mr-2"
                                                                                >
                                                                                    <img
                                                                                        className="avatar-img rounded-circle"
                                                                                        src="assets/img/patients/patient.jpg"
                                                                                        alt="User Image"
                                                                                    />
                                                                                </a>
                                                                                <a href="patient-profile.html">
                                                                                    Richard Wilson <span>#PT0016</span>
                                                                                </a>
                                                                            </h2>
                                                                        </td>
                                                                        <td>
                                                                            11 Nov 2019{" "}
                                                                            <span className="d-block text-info">
                                                                                12.00 AM
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <h2 className="table-avatar">
                                                                                <a
                                                                                    href="patient-profile.html"
                                                                                    className="avatar avatar-sm mr-2"
                                                                                >
                                                                                    <img
                                                                                        className="avatar-img rounded-circle"
                                                                                        src="assets/img/bird/bird-1.webp"
                                                                                        alt="User Image"
                                                                                    />
                                                                                </a>
                                                                                <a href="patient-profile.html">
                                                                                    Bird123 <span>#PT0016</span>
                                                                                </a>
                                                                            </h2>
                                                                        </td>
                                                                        <td>Parrot african</td>
                                                                        <td className="text-center">
                                                                            <div className="d-flex justify-content-center">
                                                                                <select
                                                                                    className="form-control select w-75"
                                                                                    disabled=""
                                                                                >
                                                                                    <option>Doctor 1</option>
                                                                                    <option>Doctor 2</option>
                                                                                    <option>Doctor 3</option>
                                                                                </select>
                                                                            </div>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <div className="table-action">
                                                                                <a
                                                                                    href="client-appointments-details-not-yet.html"
                                                                                    className="btn btn-sm bg-info-light"
                                                                                >
                                                                                    {" "}
                                                                                    <i className="far fa-eye" /> View{" "}
                                                                                </a>
                                                                                <a
                                                                                    href="add-prescription.html"
                                                                                    className="btn btn-sm bg-info-light"
                                                                                >
                                                                                    {" "}
                                                                                    <i className="fa fa-flask" /> Prescribe{" "}
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <h2 className="table-avatar">
                                                                                <a
                                                                                    href="patient-profile.html"
                                                                                    className="avatar avatar-sm mr-2"
                                                                                >
                                                                                    <img
                                                                                        className="avatar-img rounded-circle"
                                                                                        src="assets/img/patients/patient.jpg"
                                                                                        alt="User Image"
                                                                                    />
                                                                                </a>
                                                                                <a href="patient-profile.html">
                                                                                    Richard Wilson <span>#PT0016</span>
                                                                                </a>
                                                                            </h2>
                                                                        </td>
                                                                        <td>
                                                                            11 Nov 2019{" "}
                                                                            <span className="d-block text-info">
                                                                                1.00 PM
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <h2 className="table-avatar">
                                                                                <a
                                                                                    href="patient-profile.html"
                                                                                    className="avatar avatar-sm mr-2"
                                                                                >
                                                                                    <img
                                                                                        className="avatar-img rounded-circle"
                                                                                        src="assets/img/bird/bird-3.jpg"
                                                                                        alt="User Image"
                                                                                    />
                                                                                </a>
                                                                                <a href="patient-profile.html">
                                                                                    Bird123 <span>#PT0016</span>
                                                                                </a>
                                                                            </h2>
                                                                        </td>
                                                                        <td>Parrot african</td>
                                                                        <td className="text-center">
                                                                            <div className="d-flex justify-content-center">
                                                                                <select
                                                                                    className="form-control select w-75"
                                                                                    disabled=""
                                                                                >
                                                                                    <option>Doctor 1</option>
                                                                                    <option>Doctor 2</option>
                                                                                    <option>Doctor 3</option>
                                                                                </select>
                                                                            </div>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <div className="table-action">
                                                                                <a
                                                                                    href="client-appointments-details-not-yet.html"
                                                                                    className="btn btn-sm bg-info-light"
                                                                                >
                                                                                    {" "}
                                                                                    <i className="far fa-eye" /> View{" "}
                                                                                </a>
                                                                                <a
                                                                                    href="add-prescription.html"
                                                                                    className="btn btn-sm bg-info-light"
                                                                                >
                                                                                    {" "}
                                                                                    <i className="fa fa-flask" /> Prescribe{" "}
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <h2 className="table-avatar">
                                                                                <a
                                                                                    href="patient-profile.html"
                                                                                    className="avatar avatar-sm mr-2"
                                                                                >
                                                                                    <img
                                                                                        className="avatar-img rounded-circle"
                                                                                        src="assets/img/patients/patient.jpg"
                                                                                        alt="User Image"
                                                                                    />
                                                                                </a>
                                                                                <a href="patient-profile.html">
                                                                                    Richard Wilson <span>#PT0016</span>
                                                                                </a>
                                                                            </h2>
                                                                        </td>
                                                                        <td>
                                                                            11 Nov 2019{" "}
                                                                            <span className="d-block text-info">
                                                                                3.00 PM
                                                                            </span>
                                                                        </td>
                                                                        <td>
                                                                            <h2 className="table-avatar">
                                                                                <a
                                                                                    href="patient-profile.html"
                                                                                    className="avatar avatar-sm mr-2"
                                                                                >
                                                                                    <img
                                                                                        className="avatar-img rounded-circle"
                                                                                        src="assets/img/bird/bird-4.jpg"
                                                                                        alt="User Image"
                                                                                    />
                                                                                </a>
                                                                                <a href="patient-profile.html">
                                                                                    Bird123 <span>#PT0016</span>
                                                                                </a>
                                                                            </h2>
                                                                        </td>
                                                                        <td>Parrot african</td>
                                                                        <td className="text-center">
                                                                            <div className="d-flex justify-content-center">
                                                                                <select
                                                                                    className="form-control select w-75"
                                                                                    disabled=""
                                                                                >
                                                                                    <option>Doctor 1</option>
                                                                                    <option>Doctor 2</option>
                                                                                    <option>Doctor 3</option>
                                                                                </select>
                                                                            </div>
                                                                        </td>
                                                                        <td className="text-right">
                                                                            <div className="table-action">
                                                                                <a
                                                                                    href="client-appointments-details-not-yet.html"
                                                                                    className="btn btn-sm bg-info-light"
                                                                                >
                                                                                    {" "}
                                                                                    <i className="far fa-eye" /> View{" "}
                                                                                </a>
                                                                                <a
                                                                                    href="add-prescription.html;"
                                                                                    className="btn btn-sm bg-info-light"
                                                                                >
                                                                                    {" "}
                                                                                    <i className="fa fa-flask" /> Prescribe{" "}
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* /Upcoming Appointment Tab */}
                                            {/* Today Appointment Tab */}
                                            <div className="tab-pane" id="today-appointments">
                                                <div className="card card-table mb-0">
                                                    <div className="card-body">
                                                        <div className="table-responsive">
                                                            <table className="table table-hover table-center mb-0">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Patient Name</th>
                                                                        <th>Appt Date</th>
                                                                        <th>Purpose</th>
                                                                        <th>Type</th>
                                                                        <th className="text-center">Paid Amount</th>
                                                                        <th />
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            <h2 className="table-avatar">
                                                                                <a
                                                                                    href="patient-profile.html"
                                                                                    className="avatar avatar-sm mr-2"
                                                                                >
                                                                                    <img
                                                                                        className="avatar-img rounded-circle"
                                                                                        src="assets/img/patients/patient6.jpg"
                                                                                        alt="User Image"
                                                                                    />
                                                                                </a>
                                                                                <a href="patient-profile.html">
                                                                                    Elsie Gilley <span>#PT0006</span>
                                                                                </a>
                                                                            </h2>
                                                                        </td>
                                                                        <td>
                                                                            14 Nov 2019{" "}
                                                                            <span className="d-block text-info">
                                                                                6.00 PM
                                                                            </span>
                                                                        </td>
                                                                        <td>Fever</td>
                                                                        <td>Old Patient</td>
                                                                        <td className="text-center">$300</td>
                                                                        <td className="text-right">
                                                                            <div className="table-action">
                                                                                <a
                                                                                    href="javascript:void(0);"
                                                                                    className="btn btn-sm bg-info-light"
                                                                                >
                                                                                    {" "}
                                                                                    <i className="far fa-eye" /> View{" "}
                                                                                </a>
                                                                                <a
                                                                                    href="add-prescription.html"
                                                                                    className="btn btn-sm bg-info-light"
                                                                                >
                                                                                    {" "}
                                                                                    <i className="fa fa-flask" /> Prescribe{" "}
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <h2 className="table-avatar">
                                                                                <a
                                                                                    href="patient-profile.html"
                                                                                    className="avatar avatar-sm mr-2"
                                                                                >
                                                                                    <img
                                                                                        className="avatar-img rounded-circle"
                                                                                        src="assets/img/patients/patient7.jpg"
                                                                                        alt="User Image"
                                                                                    />
                                                                                </a>
                                                                                <a href="patient-profile.html">
                                                                                    Joan Gardner <span>#PT0006</span>
                                                                                </a>
                                                                            </h2>
                                                                        </td>
                                                                        <td>
                                                                            14 Nov 2019{" "}
                                                                            <span className="d-block text-info">
                                                                                5.00 PM
                                                                            </span>
                                                                        </td>
                                                                        <td>General</td>
                                                                        <td>Old Patient</td>
                                                                        <td className="text-center">$100</td>
                                                                        <td className="text-right">
                                                                            <div className="table-action">
                                                                                <a
                                                                                    href="javascript:void(0);"
                                                                                    className="btn btn-sm bg-info-light"
                                                                                >
                                                                                    {" "}
                                                                                    <i className="far fa-eye" /> View{" "}
                                                                                </a>
                                                                                <a
                                                                                    href="add-prescription.html"
                                                                                    className="btn btn-sm bg-info-light"
                                                                                >
                                                                                    {" "}
                                                                                    <i className="fa fa-flask" /> Prescribe{" "}
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <h2 className="table-avatar">
                                                                                <a
                                                                                    href="patient-profile.html"
                                                                                    className="avatar avatar-sm mr-2"
                                                                                >
                                                                                    <img
                                                                                        className="avatar-img rounded-circle"
                                                                                        src="assets/img/patients/patient8.jpg"
                                                                                        alt="User Image"
                                                                                    />
                                                                                </a>
                                                                                <a href="patient-profile.html">
                                                                                    Daniel Griffing <span>#PT0007</span>
                                                                                </a>
                                                                            </h2>
                                                                        </td>
                                                                        <td>
                                                                            14 Nov 2019{" "}
                                                                            <span className="d-block text-info">
                                                                                3.00 PM
                                                                            </span>
                                                                        </td>
                                                                        <td>General</td>
                                                                        <td>New Patient</td>
                                                                        <td className="text-center">$75</td>
                                                                        <td className="text-right">
                                                                            <div className="table-action">
                                                                                <a
                                                                                    href="javascript:void(0);"
                                                                                    className="btn btn-sm bg-info-light"
                                                                                >
                                                                                    {" "}
                                                                                    <i className="far fa-eye" /> View{" "}
                                                                                </a>
                                                                                <a
                                                                                    href="add-prescription.html"
                                                                                    className="btn btn-sm bg-info-light"
                                                                                >
                                                                                    {" "}
                                                                                    <i className="fa fa-flask" /> Prescribe{" "}
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <h2 className="table-avatar">
                                                                                <a
                                                                                    href="patient-profile.html"
                                                                                    className="avatar avatar-sm mr-2"
                                                                                >
                                                                                    <img
                                                                                        className="avatar-img rounded-circle"
                                                                                        src="assets/img/patients/patient9.jpg"
                                                                                        alt="User Image"
                                                                                    />
                                                                                </a>
                                                                                <a href="patient-profile.html">
                                                                                    Walter Roberson <span>#PT0008</span>
                                                                                </a>
                                                                            </h2>
                                                                        </td>
                                                                        <td>
                                                                            14 Nov 2019{" "}
                                                                            <span className="d-block text-info">
                                                                                1.00 PM
                                                                            </span>
                                                                        </td>
                                                                        <td>General</td>
                                                                        <td>Old Patient</td>
                                                                        <td className="text-center">$350</td>
                                                                        <td className="text-right">
                                                                            <div className="table-action">
                                                                                <a
                                                                                    href="javascript:void(0);"
                                                                                    className="btn btn-sm bg-info-light"
                                                                                >
                                                                                    {" "}
                                                                                    <i className="far fa-eye" /> View{" "}
                                                                                </a>
                                                                                <a
                                                                                    href="add-prescription.html"
                                                                                    className="btn btn-sm bg-info-light"
                                                                                >
                                                                                    {" "}
                                                                                    <i className="fa fa-flask" /> Prescribe{" "}
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <h2 className="table-avatar">
                                                                                <a
                                                                                    href="patient-profile.html"
                                                                                    className="avatar avatar-sm mr-2"
                                                                                >
                                                                                    <img
                                                                                        className="avatar-img rounded-circle"
                                                                                        src="assets/img/patients/patient10.jpg"
                                                                                        alt="User Image"
                                                                                    />
                                                                                </a>
                                                                                <a href="patient-profile.html">
                                                                                    Robert Rhodes <span>#PT0010</span>
                                                                                </a>
                                                                            </h2>
                                                                        </td>
                                                                        <td>
                                                                            14 Nov 2019{" "}
                                                                            <span className="d-block text-info">
                                                                                5.00 PM
                                                                            </span>
                                                                        </td>
                                                                        <td>General</td>
                                                                        <td>New Patient</td>
                                                                        <td className="text-center">$175</td>
                                                                        <td className="text-right">
                                                                            <div className="table-action">
                                                                                <a
                                                                                    href="javascript:void(0);"
                                                                                    className="btn btn-sm bg-info-light"
                                                                                >
                                                                                    {" "}
                                                                                    <i className="far fa-eye" /> View{" "}
                                                                                </a>
                                                                                <a
                                                                                    href="add-prescription.html"
                                                                                    className="btn btn-sm bg-info-light"
                                                                                >
                                                                                    {" "}
                                                                                    <i className="fa fa-flask" /> Prescribe{" "}
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <h2 className="table-avatar">
                                                                                <a
                                                                                    href="patient-profile.html"
                                                                                    className="avatar avatar-sm mr-2"
                                                                                >
                                                                                    <img
                                                                                        className="avatar-img rounded-circle"
                                                                                        src="assets/img/patients/patient11.jpg"
                                                                                        alt="User Image"
                                                                                    />
                                                                                </a>
                                                                                <a href="patient-profile.html">
                                                                                    Harry Williams <span>#PT0011</span>
                                                                                </a>
                                                                            </h2>
                                                                        </td>
                                                                        <td>
                                                                            14 Nov 2019{" "}
                                                                            <span className="d-block text-info">
                                                                                11.00 AM
                                                                            </span>
                                                                        </td>
                                                                        <td>General</td>
                                                                        <td>New Patient</td>
                                                                        <td className="text-center">$450</td>
                                                                        <td className="text-right">
                                                                            <div className="table-action">
                                                                                <a
                                                                                    href="javascript:void(0);"
                                                                                    className="btn btn-sm bg-info-light"
                                                                                >
                                                                                    {" "}
                                                                                    <i className="far fa-eye" /> View{" "}
                                                                                </a>
                                                                                <a
                                                                                    href="add-prescription.html"
                                                                                    className="btn btn-sm bg-info-light"
                                                                                >
                                                                                    {" "}
                                                                                    <i className="fa fa-flask" /> Prescribe{" "}
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* /Today Appointment Tab */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Page Content */}
        </>

    )
}
