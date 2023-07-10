import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
export default function CustomerDashboard() {
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
                        {/* Profile Sidebar */}
                        <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                            <div className="profile-sidebar">
                                <div className="widget-profile pro-widget-content">
                                    <div className="profile-info-widget">
                                        <a href="#" className="booking-doc-img">
                                            <img src={user.picture} alt="User Image" />
                                        </a>
                                        <div className="profile-det-info">
                                            <h3>{user.name}</h3>
                                            <div className="patient-details">
                                                <h5>
                                                    <i className="fas fa fa-envelope" /> {user.email}
                                                </h5>
                                                <h5 className="mb-0">
                                                    <i className="fas fa-map-marker-alt" /> Thanh Xuan, Hanoi
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dashboard-widget">
                                    <nav className="dashboard-menu">
                                        <ul>
                                            <li className="active">
                                                <a href="patient-dashboard.html">
                                                    <i className="fas fa-columns" />
                                                    <span>Dashboard</span>
                                                </a>
                                            </li>
                                            {/* <li>
												<a href="favourites.html">
													<i class="fas fa-bookmark"></i>
													<span>Favourites</span>
												</a>
											</li> */}
                                            {/* <li>
												<a href="chat.html">
													<i class="fas fa-comments"></i>
													<span>Message</span>
													<small class="unread-msg">23</small>
												</a>
											</li> */}
                                            <li>
                                                <a href="birdlist.html">
                                                    <i className="fa fa-tasks" />
                                                    <span>Birds List</span>
                                                </a>
                                            </li>
                                            <li>
                                                <Link to='/customer-profile-setting'>
                                                    <i className="fas fa-user-cog" />
                                                    <span>Profile Settings</span>
                                                </Link>
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
                        </div>
                        {/* / Profile Sidebar */}
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
                                                    Appointments
                                                </a>
                                            </li>
                                            {/* <li class="nav-item">
												<a class="nav-link" href="#pat_prescriptions" data-toggle="tab">Prescriptions</a>
											</li> */}
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="#pat_medical_records"
                                                    data-toggle="tab"
                                                >
                                                    <span className="med-records">Medical Records</span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="#pat_billing"
                                                    data-toggle="tab"
                                                >
                                                    Billing
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                    {/* /Tab Menu */}
                                    {/* Tab Content */}
                                    <div className="tab-content pt-0">
                                        {/* Appointment Tab */}
                                        <div
                                            id="pat_appointments"
                                            className="tab-pane fade show active"
                                        >
                                            <div className="card card-table mb-0">
                                                <div className="card-body">
                                                    <div className="table-responsive">
                                                        <table className="table table-hover table-center mb-0">
                                                            <thead>
                                                                <tr>
                                                                    <th>Doctor</th>
                                                                    <th>Appt Date</th>
                                                                    <th>Booking Date</th>
                                                                    <th>Amount</th>
                                                                    <th>Follow Up</th>
                                                                    <th>Status</th>
                                                                    <th />
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {/* <tr>
																	<td>
																		<h2 class="table-avatar">
																			<a href="doctor-profile.html" class="avatar avatar-sm mr-2">
																				<img class="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-01.jpg" alt="User Image" />
																			</a>
																			<a href="doctor-profile.html">Dr. Ruby Perrin <span>Dental</span></a>
																		</h2>
																	</td>
																	<td>14 Nov 2019 <span class="d-block text-info">10.00 AM</span></td>
																	<td>12 Nov 2019</td>
																	<td>$160</td>
																	<td>16 Nov 2019</td>
																	<td><span class="badge badge-pill bg-success-light">Confirm</span></td>
																	<td class="text-right">
																		<div class="table-action">
																			<a href="javascript:void(0);" class="btn btn-sm bg-primary-light"> <i class="fas fa-print"></i> Print </a>
																			<a href="javascript:void(0);" class="btn btn-sm bg-info-light"> <i class="far fa-eye"></i> View </a>
																		</div>
																	</td>
																</tr>
																<tr>
																	<td>
																		<h2 class="table-avatar">
																			<a href="doctor-profile.html" class="avatar avatar-sm mr-2">
																				<img class="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-02.jpg" alt="User Image" />
																			</a>
																			<a href="doctor-profile.html">Dr. Darren Elder <span>Dental</span></a>
																		</h2>
																	</td>
																	<td>12 Nov 2019 <span class="d-block text-info">8.00 PM</span></td>
																	<td>12 Nov 2019</td>
																	<td>$250</td>
																	<td>14 Nov 2019</td>
																	<td><span class="badge badge-pill bg-success-light">Confirm</span></td>
																	<td class="text-right">
																		<div class="table-action">
																			<a href="javascript:void(0);" class="btn btn-sm bg-primary-light"> <i class="fas fa-print"></i> Print </a>
																			<a href="javascript:void(0);" class="btn btn-sm bg-info-light"> <i class="far fa-eye"></i> View </a>
																		</div>
																	</td>
																</tr>
																<tr>
																	<td>
																		<h2 class="table-avatar">
																			<a href="doctor-profile.html" class="avatar avatar-sm mr-2">
																				<img class="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-03.jpg" alt="User Image" />
																			</a>
																			<a href="doctor-profile.html">Dr. Deborah Angel <span>Cardiology</span></a>
																		</h2>
																	</td>
																	<td>11 Nov 2019 <span class="d-block text-info">11.00 AM</span></td>
																	<td>10 Nov 2019</td>
																	<td>$400</td>
																	<td>13 Nov 2019</td>
																	<td><span class="badge badge-pill bg-danger-light">Cancelled</span></td>
																	<td class="text-right">
																		<div class="table-action">
																			<a href="javascript:void(0);" class="btn btn-sm bg-primary-light"> <i class="fas fa-print"></i> Print </a>
																			<a href="javascript:void(0);" class="btn btn-sm bg-info-light"> <i class="far fa-eye"></i> View </a>
																		</div>
																	</td>
																</tr>
																<tr>
																	<td>
																		<h2 class="table-avatar">
																			<a href="doctor-profile.html" class="avatar avatar-sm mr-2">
																				<img class="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-04.jpg" alt="User Image" />
																			</a>
																			<a href="doctor-profile.html">Dr. Sofia Brient <span>Urology</span></a>
																		</h2>
																	</td>
																	<td>10 Nov 2019 <span class="d-block text-info">3.00 PM</span></td>
																	<td>10 Nov 2019</td>
																	<td>$350</td>
																	<td>12 Nov 2019</td>
																	<td><span class="badge badge-pill bg-warning-light">Pending</span></td>
																	<td class="text-right">
																		<div class="table-action">
																			<a href="javascript:void(0);" class="btn btn-sm bg-primary-light"> <i class="fas fa-print"></i> Print </a>
																			<a href="javascript:void(0);" class="btn btn-sm bg-info-light"> <i class="far fa-eye"></i> View </a>
																		</div>
																	</td>
																</tr>
																<tr>
																	<td>
																		<h2 class="table-avatar">
																			<a href="doctor-profile.html" class="avatar avatar-sm mr-2">
																				<img class="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-05.jpg" alt="User Image" />
																			</a>
																			<a href="doctor-profile.html">Dr. Marvin Campbell <span>Ophthalmology</span></a>
																		</h2>
																	</td>
																	<td>9 Nov 2019 <span class="d-block text-info">7.00 PM</span></td>
																	<td>8 Nov 2019</td>
																	<td>$75</td>
																	<td>11 Nov 2019</td>
																	<td><span class="badge badge-pill bg-success-light">Confirm</span></td>
																	<td class="text-right">
																		<div class="table-action">
																			<a href="javascript:void(0);" class="btn btn-sm bg-primary-light"> <i class="fas fa-print"></i> Print </a>
																			<a href="javascript:void(0);" class="btn btn-sm bg-info-light"> <i class="far fa-eye"></i> View </a>
																		</div>
																	</td>
																</tr>
																<tr>
																	<td>
																		<h2 class="table-avatar">
																			<a href="doctor-profile.html" class="avatar avatar-sm mr-2">
																				<img class="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-06.jpg" alt="User Image" />
																			</a>
																			<a href="doctor-profile.html">Dr. Katharine Berthold <span>Orthopaedics</span></a>
																		</h2>
																	</td>
																	<td>8 Nov 2019 <span class="d-block text-info">9.00 AM</span></td>
																	<td>6 Nov 2019</td>
																	<td>$175</td>
																	<td>10 Nov 2019</td>
																	<td><span class="badge badge-pill bg-danger-light">Cancelled</span></td>
																	<td class="text-right">
																		<div class="table-action">
																			<a href="javascript:void(0);" class="btn btn-sm bg-primary-light"> <i class="fas fa-print"></i> Print </a>
																			<a href="javascript:void(0);" class="btn btn-sm bg-info-light"> <i class="far fa-eye"></i> View </a>
																		</div>
																	</td>
																</tr> */}
                                                                <tr>
                                                                    <td>
                                                                        <h2 className="table-avatar">
                                                                            <a
                                                                                href="doctor-profile.html"
                                                                                className="avatar avatar-sm mr-2"
                                                                            >
                                                                                <img
                                                                                    className="avatar-img rounded-circle"
                                                                                    src="assets/img/doctors/doctor-thumb-07.jpg"
                                                                                    alt="User Image"
                                                                                />
                                                                            </a>
                                                                            <a href="doctor-profile.html">
                                                                                Dr. ABC <span>Grooming</span>
                                                                            </a>
                                                                        </h2>
                                                                    </td>
                                                                    <td>
                                                                        8 Nov 2023{" "}
                                                                        <span className="d-block text-info">
                                                                            6.00 PM
                                                                        </span>
                                                                    </td>
                                                                    <td>6 Nov 2023</td>
                                                                    <td>$450</td>
                                                                    <td>10 Nov 2023</td>
                                                                    <td>
                                                                        <span className="badge badge-pill bg-warning-light">
                                                                            Processing
                                                                        </span>
                                                                    </td>
                                                                    <td className="text-right">
                                                                        <div className="table-action">
                                                                            <a
                                                                                href="javascript:void(0);"
                                                                                className="btn btn-sm bg-danger-light"
                                                                            >
                                                                                {" "}
                                                                                <i className="fa fa-times" /> Cancel{" "}
                                                                            </a>
                                                                            <a
                                                                                href="javascript:void(0);"
                                                                                className="btn btn-sm bg-primary-light"
                                                                            >
                                                                                {" "}
                                                                                <i className="fas fa-print" /> Print{" "}
                                                                            </a>
                                                                            <a
                                                                                href="javascript:void(0);"
                                                                                className="btn btn-sm bg-info-light"
                                                                            >
                                                                                {" "}
                                                                                <i className="far fa-eye" /> View{" "}
                                                                            </a>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <h2 className="table-avatar">
                                                                            <a
                                                                                href="doctor-profile.html"
                                                                                className="avatar avatar-sm mr-2"
                                                                            >
                                                                                <img
                                                                                    className="avatar-img rounded-circle"
                                                                                    src="assets/img/doctors/doctor-thumb-08.jpg"
                                                                                    alt="User Image"
                                                                                />
                                                                            </a>
                                                                            <a href="doctor-profile.html">
                                                                                Dr. BBB<span>Genetic</span>
                                                                            </a>
                                                                        </h2>
                                                                    </td>
                                                                    <td>
                                                                        7 Nov 2023{" "}
                                                                        <span className="d-block text-info">
                                                                            9.00 PM
                                                                        </span>
                                                                    </td>
                                                                    <td>7 Nov 2023</td>
                                                                    <td>$275</td>
                                                                    <td>9 Nov 2023</td>
                                                                    <td>
                                                                        <span className="badge badge-pill bg-success-light">
                                                                            Confirmed
                                                                        </span>
                                                                    </td>
                                                                    <td className="text-right">
                                                                        <div className="table-action">
                                                                            <a
                                                                                href="javascript:void(0);"
                                                                                className="btn btn-sm bg-primary-light"
                                                                            >
                                                                                {" "}
                                                                                <i className="fas fa-print" /> Print{" "}
                                                                            </a>
                                                                            <a
                                                                                href="javascript:void(0);"
                                                                                className="btn btn-sm bg-info-light"
                                                                            >
                                                                                {" "}
                                                                                <i className="far fa-eye" /> View{" "}
                                                                            </a>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <h2 className="table-avatar">
                                                                            <a
                                                                                href="doctor-profile.html"
                                                                                className="avatar avatar-sm mr-2"
                                                                            >
                                                                                <img
                                                                                    className="avatar-img rounded-circle"
                                                                                    src="assets/img/doctors/doctor-thumb-02.jpg"
                                                                                    alt="User Image"
                                                                                />
                                                                            </a>
                                                                            <a href="doctor-profile.html">
                                                                                Dr. ABC <span>Surgery</span>
                                                                            </a>
                                                                        </h2>
                                                                    </td>
                                                                    <td>
                                                                        6 Jun 2023{" "}
                                                                        <span className="d-block text-info">
                                                                            10.00 AM
                                                                        </span>
                                                                    </td>
                                                                    <td>4 Jun 2023</td>
                                                                    <td>$110</td>
                                                                    <td>8 Jun 2023</td>
                                                                    <td>
                                                                        <span className="badge badge-pill bg-primary-light">
                                                                            Completed
                                                                        </span>
                                                                    </td>
                                                                    <td className="text-right">
                                                                        <div className="table-action">
                                                                            <a
                                                                                href="view-prescription.html"
                                                                                className="btn btn-sm bg-info-light"
                                                                            >
                                                                                {" "}
                                                                                <i className="fa fa-flask" /> Prescription{" "}
                                                                            </a>
                                                                            <a
                                                                                href="javascript:void(0);"
                                                                                className="btn btn-sm bg-primary-light"
                                                                            >
                                                                                {" "}
                                                                                <i className="fas fa-print" /> Print{" "}
                                                                            </a>
                                                                            <a
                                                                                href="invoice-view.html"
                                                                                className="btn btn-sm bg-info-light"
                                                                            >
                                                                                {" "}
                                                                                <i className="far fa-eye" /> View{" "}
                                                                            </a>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <h2 className="table-avatar">
                                                                            <a
                                                                                href="doctor-profile.html"
                                                                                className="avatar avatar-sm mr-2"
                                                                            >
                                                                                <img
                                                                                    className="avatar-img rounded-circle"
                                                                                    src="assets/img/doctors/doctor-thumb-10.jpg"
                                                                                    alt="User Image"
                                                                                />
                                                                            </a>
                                                                            <a href="doctor-profile.html">
                                                                                Dr. AAA <span>General</span>
                                                                            </a>
                                                                        </h2>
                                                                    </td>
                                                                    <td>
                                                                        5 Nov 2022{" "}
                                                                        <span className="d-block text-info">
                                                                            5.00 PM
                                                                        </span>
                                                                    </td>
                                                                    <td>1 Nov 2022</td>
                                                                    <td>$100</td>
                                                                    <td>7 Nov 2022</td>
                                                                    <td>
                                                                        <span className="badge badge-pill bg-danger-light">
                                                                            Cancelled
                                                                        </span>
                                                                    </td>
                                                                    <td className="text-right">
                                                                        <div className="table-action">
                                                                            <a
                                                                                href="javascript:void(0);"
                                                                                className="btn btn-sm bg-primary-light"
                                                                            >
                                                                                {" "}
                                                                                <i className="fas fa-print" /> Print{" "}
                                                                            </a>
                                                                            <a
                                                                                href="javascript:void(0);"
                                                                                className="btn btn-sm bg-info-light"
                                                                            >
                                                                                {" "}
                                                                                <i className="far fa-eye" /> View{" "}
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
                                        {/* /Appointment Tab */}
                                        {/* Prescription Tab */}
                                        {/* <div class="tab-pane fade" id="pat_prescriptions">
											<div class="card card-table mb-0">
												<div class="card-body">
													<div class="table-responsive">
														<table class="table table-hover table-center mb-0">
															<thead>
																<tr>
																	<th>Date</th>
																	<th>Name</th>
																	<th>Created by</th>
																	<th></th>
																</tr>
															</thead>
															<tbody>
																<tr>
																	<td>14 Nov 2019</td>
																	<td>Prescription 1</td>
																	<td>
																		<h2 class="table-avatar">
																			<a href="doctor-profile.html" class="avatar avatar-sm mr-2">
																				<img class="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-01.jpg" alt="User Image" />
																			</a>
																			<a href="doctor-profile.html">Dr. Ruby Perrin <span>Dental</span></a>
																		</h2>
																	</td>
																	<td class="text-right">
																		<div class="table-action">
																			<a href="javascript:void(0);" class="btn btn-sm bg-primary-light"> <i class="fas fa-print"></i> Print </a>
																			<a href="javascript:void(0);" class="btn btn-sm bg-info-light"> <i class="far fa-eye"></i> View </a>
																		</div>
																	</td>
																</tr>
																<tr>
																	<td>13 Nov 2019</td>
																	<td>Prescription 2</td>
																	<td>
																		<h2 class="table-avatar">
																			<a href="doctor-profile.html" class="avatar avatar-sm mr-2">
																				<img class="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-02.jpg" alt="User Image" />
																			</a>
																			<a href="doctor-profile.html">Dr. Darren Elder <span>Dental</span></a>
																		</h2>
																	</td>
																	<td class="text-right">
																		<div class="table-action">
																			<a href="javascript:void(0);" class="btn btn-sm bg-primary-light"> <i class="fas fa-print"></i> Print </a>
																			<a href="javascript:void(0);" class="btn btn-sm bg-info-light"> <i class="far fa-eye"></i> View </a>
																		</div>
																	</td>
																</tr>
																<tr>
																	<td>12 Nov 2019</td>
																	<td>Prescription 3</td>
																	<td>
																		<h2 class="table-avatar">
																			<a href="doctor-profile.html" class="avatar avatar-sm mr-2">
																				<img class="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-03.jpg" alt="User Image" />
																			</a>
																			<a href="doctor-profile.html">Dr. Deborah Angel <span>Cardiology</span></a>
																		</h2>
																	</td>
																	<td class="text-right">
																		<div class="table-action">
																			<a href="javascript:void(0);" class="btn btn-sm bg-primary-light"> <i class="fas fa-print"></i> Print </a>
																			<a href="javascript:void(0);" class="btn btn-sm bg-info-light"> <i class="far fa-eye"></i> View </a>
																		</div>
																	</td>
																</tr>
																<tr>
																	<td>11 Nov 2019</td>
																	<td>Prescription 4</td>
																	<td>
																		<h2 class="table-avatar">
																			<a href="doctor-profile.html" class="avatar avatar-sm mr-2">
																				<img class="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-04.jpg" alt="User Image" />
																			</a>
																			<a href="doctor-profile.html">Dr. Sofia Brient <span>Urology</span></a>
																		</h2>
																	</td>
																	<td class="text-right">
																		<div class="table-action">
																			<a href="javascript:void(0);" class="btn btn-sm bg-primary-light"> <i class="fas fa-print"></i> Print </a>
																			<a href="javascript:void(0);" class="btn btn-sm bg-info-light"> <i class="far fa-eye"></i> View </a>
																		</div>
																	</td>
																</tr>
																<tr>
																	<td>10 Nov 2019</td>
																	<td>Prescription 5</td>
																	<td>
																		<h2 class="table-avatar">
																			<a href="doctor-profile.html" class="avatar avatar-sm mr-2">
																				<img class="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-05.jpg" alt="User Image" />
																			</a>
																			<a href="doctor-profile.html">Dr. Marvin Campbell <span>Dental</span></a>
																		</h2>
																	</td>
																	<td class="text-right">
																		<div class="table-action">
																			<a href="javascript:void(0);" class="btn btn-sm bg-primary-light"> <i class="fas fa-print"></i> Print </a>
																			<a href="javascript:void(0);" class="btn btn-sm bg-info-light"> <i class="far fa-eye"></i> View </a>
																		</div>
																	</td>
																</tr>
																<tr>
																	<td>9 Nov 2019</td>
																	<td>Prescription 6</td>
																	<td>
																		<h2 class="table-avatar">
																			<a href="doctor-profile.html" class="avatar avatar-sm mr-2">
																				<img class="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-06.jpg" alt="User Image" />
																			</a>
																			<a href="doctor-profile.html">Dr. Katharine Berthold <span>Orthopaedics</span></a>
																		</h2>
																	</td>
																	<td class="text-right">
																		<div class="table-action">
																			<a href="javascript:void(0);" class="btn btn-sm bg-primary-light"> <i class="fas fa-print"></i> Print </a>
																			<a href="javascript:void(0);" class="btn btn-sm bg-info-light"> <i class="far fa-eye"></i> View </a>
																		</div>
																	</td>
																</tr>
																<tr>
																	<td>8 Nov 2019</td>
																	<td>Prescription 7</td>
																	<td>
																		<h2 class="table-avatar">
																			<a href="doctor-profile.html" class="avatar avatar-sm mr-2">
																				<img class="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-07.jpg" alt="User Image" />
																			</a>
																			<a href="doctor-profile.html">Dr. Linda Tobin <span>Neurology</span></a>
																		</h2>
																	</td>
																	<td class="text-right">
																		<div class="table-action">
																			<a href="javascript:void(0);" class="btn btn-sm bg-primary-light"> <i class="fas fa-print"></i> Print </a>
																			<a href="javascript:void(0);" class="btn btn-sm bg-info-light"> <i class="far fa-eye"></i> View </a>
																		</div>
																	</td>
																</tr>
																<tr>
																	<td>7 Nov 2019</td>
																	<td>Prescription 8</td>
																	<td>
																		<h2 class="table-avatar">
																			<a href="doctor-profile.html" class="avatar avatar-sm mr-2">
																				<img class="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-08.jpg" alt="User Image" />
																			</a>
																			<a href="doctor-profile.html">Dr. Paul Richard <span>Dermatology</span></a>
																		</h2>
																	</td>
																	<td class="text-right">
																		<div class="table-action">
																			<a href="javascript:void(0);" class="btn btn-sm bg-primary-light"> <i class="fas fa-print"></i> Print </a>
																			<a href="javascript:void(0);" class="btn btn-sm bg-info-light"> <i class="far fa-eye"></i> View </a>
																		</div>
																	</td>
																</tr>
																<tr>
																	<td>6 Nov 2019</td>
																	<td>Prescription 9</td>
																	<td>
																		<h2 class="table-avatar">
																			<a href="doctor-profile.html" class="avatar avatar-sm mr-2">
																				<img class="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-09.jpg" alt="User Image" />
																			</a>
																			<a href="doctor-profile.html">Dr. John Gibbs <span>Dental</span></a>
																		</h2>
																	</td>
																	<td class="text-right">
																		<div class="table-action">
																			<a href="javascript:void(0);" class="btn btn-sm bg-primary-light"> <i class="fas fa-print"></i> Print </a>
																			<a href="javascript:void(0);" class="btn btn-sm bg-info-light"> <i class="far fa-eye"></i> View </a>
																		</div>
																	</td>
																</tr>
																<tr>
																	<td>5 Nov 2019</td>
																	<td>Prescription 10</td>
																	<td>
																		<h2 class="table-avatar">
																			<a href="doctor-profile.html" class="avatar avatar-sm mr-2">
																				<img class="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-10.jpg" alt="User Image" />
																			</a>
																			<a href="doctor-profile.html">Dr. Olga Barlow <span>Dental</span></a>
																		</h2>
																	</td>
																	<td class="text-right">
																		<div class="table-action">
																			<a href="javascript:void(0);" class="btn btn-sm bg-primary-light"> <i class="fas fa-print"></i> Print </a>
																			<a href="javascript:void(0);" class="btn btn-sm bg-info-light"> <i class="far fa-eye"></i> View </a>
																		</div>
																	</td>
																</tr>
															</tbody>
														</table>
													</div>
												</div>
											</div>
										</div> */}
                                        {/* /Prescription Tab */}
                                        {/* Medical Records Tab */}
                                        <div id="pat_medical_records" className="tab-pane fade">
                                            <div className="card card-table mb-0">
                                                <div className="card-body">
                                                    <div className="table-responsive">
                                                        <table className="table table-hover table-center mb-0">
                                                            <thead>
                                                                <tr>
                                                                    <th>ID</th>
                                                                    <th>Date</th>
                                                                    <th>Description</th>
                                                                    <th>Attachment</th>
                                                                    <th>Created</th>
                                                                    <th />
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <a href="javascript:void(0);">#MR-0010</a>
                                                                    </td>
                                                                    <td>14 Nov 2019</td>
                                                                    <td>Dental Filling</td>
                                                                    <td>
                                                                        <a href="#">dental-test.pdf</a>
                                                                    </td>
                                                                    <td>
                                                                        <h2 className="table-avatar">
                                                                            <a
                                                                                href="doctor-profile.html"
                                                                                className="avatar avatar-sm mr-2"
                                                                            >
                                                                                <img
                                                                                    className="avatar-img rounded-circle"
                                                                                    src="assets/img/doctors/doctor-thumb-01.jpg"
                                                                                    alt="User Image"
                                                                                />
                                                                            </a>
                                                                            <a href="doctor-profile.html">
                                                                                Dr. Ruby Perrin <span>Dental</span>
                                                                            </a>
                                                                        </h2>
                                                                    </td>
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
                                                                                href="javascript:void(0);"
                                                                                className="btn btn-sm bg-primary-light"
                                                                            >
                                                                                {" "}
                                                                                <i className="fas fa-print" /> Print{" "}
                                                                            </a>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <a href="javascript:void(0);">#MR-0009</a>
                                                                    </td>
                                                                    <td>13 Nov 2019</td>
                                                                    <td>Teeth Cleaning</td>
                                                                    <td>
                                                                        <a href="#">dental-test.pdf</a>
                                                                    </td>
                                                                    <td>
                                                                        <h2 className="table-avatar">
                                                                            <a
                                                                                href="doctor-profile.html"
                                                                                className="avatar avatar-sm mr-2"
                                                                            >
                                                                                <img
                                                                                    className="avatar-img rounded-circle"
                                                                                    src="assets/img/doctors/doctor-thumb-02.jpg"
                                                                                    alt="User Image"
                                                                                />
                                                                            </a>
                                                                            <a href="doctor-profile.html">
                                                                                Dr. Darren Elder <span>Dental</span>
                                                                            </a>
                                                                        </h2>
                                                                    </td>
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
                                                                                href="javascript:void(0);"
                                                                                className="btn btn-sm bg-primary-light"
                                                                            >
                                                                                {" "}
                                                                                <i className="fas fa-print" /> Print{" "}
                                                                            </a>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <a href="javascript:void(0);">#MR-0008</a>
                                                                    </td>
                                                                    <td>12 Nov 2019</td>
                                                                    <td>General Checkup</td>
                                                                    <td>
                                                                        <a href="#">cardio-test.pdf</a>
                                                                    </td>
                                                                    <td>
                                                                        <h2 className="table-avatar">
                                                                            <a
                                                                                href="doctor-profile.html"
                                                                                className="avatar avatar-sm mr-2"
                                                                            >
                                                                                <img
                                                                                    className="avatar-img rounded-circle"
                                                                                    src="assets/img/doctors/doctor-thumb-03.jpg"
                                                                                    alt="User Image"
                                                                                />
                                                                            </a>
                                                                            <a href="doctor-profile.html">
                                                                                Dr. Deborah Angel <span>Cardiology</span>
                                                                            </a>
                                                                        </h2>
                                                                    </td>
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
                                                                                href="javascript:void(0);"
                                                                                className="btn btn-sm bg-primary-light"
                                                                            >
                                                                                {" "}
                                                                                <i className="fas fa-print" /> Print{" "}
                                                                            </a>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <a href="javascript:void(0);">#MR-0007</a>
                                                                    </td>
                                                                    <td>11 Nov 2019</td>
                                                                    <td>General Test</td>
                                                                    <td>
                                                                        <a href="#">general-test.pdf</a>
                                                                    </td>
                                                                    <td>
                                                                        <h2 className="table-avatar">
                                                                            <a
                                                                                href="doctor-profile.html"
                                                                                className="avatar avatar-sm mr-2"
                                                                            >
                                                                                <img
                                                                                    className="avatar-img rounded-circle"
                                                                                    src="assets/img/doctors/doctor-thumb-04.jpg"
                                                                                    alt="User Image"
                                                                                />
                                                                            </a>
                                                                            <a href="doctor-profile.html">
                                                                                Dr. Sofia Brient <span>Urology</span>
                                                                            </a>
                                                                        </h2>
                                                                    </td>
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
                                                                                href="javascript:void(0);"
                                                                                className="btn btn-sm bg-primary-light"
                                                                            >
                                                                                {" "}
                                                                                <i className="fas fa-print" /> Print{" "}
                                                                            </a>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <a href="javascript:void(0);">#MR-0006</a>
                                                                    </td>
                                                                    <td>10 Nov 2019</td>
                                                                    <td>Eye Test</td>
                                                                    <td>
                                                                        <a href="#">eye-test.pdf</a>
                                                                    </td>
                                                                    <td>
                                                                        <h2 className="table-avatar">
                                                                            <a
                                                                                href="doctor-profile.html"
                                                                                className="avatar avatar-sm mr-2"
                                                                            >
                                                                                <img
                                                                                    className="avatar-img rounded-circle"
                                                                                    src="assets/img/doctors/doctor-thumb-05.jpg"
                                                                                    alt="User Image"
                                                                                />
                                                                            </a>
                                                                            <a href="doctor-profile.html">
                                                                                Dr. Marvin Campbell{" "}
                                                                                <span>Ophthalmology</span>
                                                                            </a>
                                                                        </h2>
                                                                    </td>
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
                                                                                href="javascript:void(0);"
                                                                                className="btn btn-sm bg-primary-light"
                                                                            >
                                                                                {" "}
                                                                                <i className="fas fa-print" /> Print{" "}
                                                                            </a>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <a href="javascript:void(0);">#MR-0005</a>
                                                                    </td>
                                                                    <td>9 Nov 2019</td>
                                                                    <td>Leg Pain</td>
                                                                    <td>
                                                                        <a href="#">ortho-test.pdf</a>
                                                                    </td>
                                                                    <td>
                                                                        <h2 className="table-avatar">
                                                                            <a
                                                                                href="doctor-profile.html"
                                                                                className="avatar avatar-sm mr-2"
                                                                            >
                                                                                <img
                                                                                    className="avatar-img rounded-circle"
                                                                                    src="assets/img/doctors/doctor-thumb-06.jpg"
                                                                                    alt="User Image"
                                                                                />
                                                                            </a>
                                                                            <a href="doctor-profile.html">
                                                                                Dr. Katharine Berthold{" "}
                                                                                <span>Orthopaedics</span>
                                                                            </a>
                                                                        </h2>
                                                                    </td>
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
                                                                                href="javascript:void(0);"
                                                                                className="btn btn-sm bg-primary-light"
                                                                            >
                                                                                {" "}
                                                                                <i className="fas fa-print" /> Print{" "}
                                                                            </a>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <a href="javascript:void(0);">#MR-0004</a>
                                                                    </td>
                                                                    <td>8 Nov 2019</td>
                                                                    <td>Head pain</td>
                                                                    <td>
                                                                        <a href="#">neuro-test.pdf</a>
                                                                    </td>
                                                                    <td>
                                                                        <h2 className="table-avatar">
                                                                            <a
                                                                                href="doctor-profile.html"
                                                                                className="avatar avatar-sm mr-2"
                                                                            >
                                                                                <img
                                                                                    className="avatar-img rounded-circle"
                                                                                    src="assets/img/doctors/doctor-thumb-07.jpg"
                                                                                    alt="User Image"
                                                                                />
                                                                            </a>
                                                                            <a href="doctor-profile.html">
                                                                                Dr. Linda Tobin <span>Neurology</span>
                                                                            </a>
                                                                        </h2>
                                                                    </td>
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
                                                                                href="javascript:void(0);"
                                                                                className="btn btn-sm bg-primary-light"
                                                                            >
                                                                                {" "}
                                                                                <i className="fas fa-print" /> Print{" "}
                                                                            </a>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <a href="javascript:void(0);">#MR-0003</a>
                                                                    </td>
                                                                    <td>7 Nov 2019</td>
                                                                    <td>Skin Alergy</td>
                                                                    <td>
                                                                        <a href="#">alergy-test.pdf</a>
                                                                    </td>
                                                                    <td>
                                                                        <h2 className="table-avatar">
                                                                            <a
                                                                                href="doctor-profile.html"
                                                                                className="avatar avatar-sm mr-2"
                                                                            >
                                                                                <img
                                                                                    className="avatar-img rounded-circle"
                                                                                    src="assets/img/doctors/doctor-thumb-08.jpg"
                                                                                    alt="User Image"
                                                                                />
                                                                            </a>
                                                                            <a href="doctor-profile.html">
                                                                                Dr. Paul Richard <span>Dermatology</span>
                                                                            </a>
                                                                        </h2>
                                                                    </td>
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
                                                                                href="javascript:void(0);"
                                                                                className="btn btn-sm bg-primary-light"
                                                                            >
                                                                                {" "}
                                                                                <i className="fas fa-print" /> Print{" "}
                                                                            </a>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <a href="javascript:void(0);">#MR-0002</a>
                                                                    </td>
                                                                    <td>6 Nov 2019</td>
                                                                    <td>Dental Removing</td>
                                                                    <td>
                                                                        <a href="#">dental-test.pdf</a>
                                                                    </td>
                                                                    <td>
                                                                        <h2 className="table-avatar">
                                                                            <a
                                                                                href="doctor-profile.html"
                                                                                className="avatar avatar-sm mr-2"
                                                                            >
                                                                                <img
                                                                                    className="avatar-img rounded-circle"
                                                                                    src="assets/img/doctors/doctor-thumb-09.jpg"
                                                                                    alt="User Image"
                                                                                />
                                                                            </a>
                                                                            <a href="doctor-profile.html">
                                                                                Dr. John Gibbs <span>Dental</span>
                                                                            </a>
                                                                        </h2>
                                                                    </td>
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
                                                                                href="javascript:void(0);"
                                                                                className="btn btn-sm bg-primary-light"
                                                                            >
                                                                                {" "}
                                                                                <i className="fas fa-print" /> Print{" "}
                                                                            </a>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <a href="javascript:void(0);">#MR-0001</a>
                                                                    </td>
                                                                    <td>5 Nov 2019</td>
                                                                    <td>Dental Filling</td>
                                                                    <td>
                                                                        <a href="#">dental-test.pdf</a>
                                                                    </td>
                                                                    <td>
                                                                        <h2 className="table-avatar">
                                                                            <a
                                                                                href="doctor-profile.html"
                                                                                className="avatar avatar-sm mr-2"
                                                                            >
                                                                                <img
                                                                                    className="avatar-img rounded-circle"
                                                                                    src="assets/img/doctors/doctor-thumb-10.jpg"
                                                                                    alt="User Image"
                                                                                />
                                                                            </a>
                                                                            <a href="doctor-profile.html">
                                                                                Dr. Olga Barlow <span>Dental</span>
                                                                            </a>
                                                                        </h2>
                                                                    </td>
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
                                                                                href="javascript:void(0);"
                                                                                className="btn btn-sm bg-primary-light"
                                                                            >
                                                                                {" "}
                                                                                <i className="fas fa-print" /> Print{" "}
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
                                        {/* /Medical Records Tab */}
                                        {/* Billing Tab */}
                                        <div id="pat_billing" className="tab-pane fade">
                                            <div className="card card-table mb-0">
                                                <div className="card-body">
                                                    <div className="table-responsive">
                                                        <table className="table table-hover table-center mb-0">
                                                            <thead>
                                                                <tr>
                                                                    <th>Invoice No</th>
                                                                    <th>Doctor</th>
                                                                    <th>Amount</th>
                                                                    <th>Paid On</th>
                                                                    <th />
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <a href="invoice-view.html">#INV-0010</a>
                                                                    </td>
                                                                    <td>
                                                                        <h2 className="table-avatar">
                                                                            <a
                                                                                href="doctor-profile.html"
                                                                                className="avatar avatar-sm mr-2"
                                                                            >
                                                                                <img
                                                                                    className="avatar-img rounded-circle"
                                                                                    src="assets/img/doctors/doctor-thumb-01.jpg"
                                                                                    alt="User Image"
                                                                                />
                                                                            </a>
                                                                            <a href="doctor-profile.html">
                                                                                Ruby Perrin <span>Dental</span>
                                                                            </a>
                                                                        </h2>
                                                                    </td>
                                                                    <td>$450</td>
                                                                    <td>14 Nov 2019</td>
                                                                    <td className="text-right">
                                                                        <div className="table-action">
                                                                            <a
                                                                                href="invoice-view.html"
                                                                                className="btn btn-sm bg-info-light"
                                                                            >
                                                                                {" "}
                                                                                <i className="far fa-eye" /> View{" "}
                                                                            </a>
                                                                            <a
                                                                                href="javascript:void(0);"
                                                                                className="btn btn-sm bg-primary-light"
                                                                            >
                                                                                {" "}
                                                                                <i className="fas fa-print" /> Print{" "}
                                                                            </a>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <a href="invoice-view.html">#INV-0009</a>
                                                                    </td>
                                                                    <td>
                                                                        <h2 className="table-avatar">
                                                                            <a
                                                                                href="doctor-profile.html"
                                                                                className="avatar avatar-sm mr-2"
                                                                            >
                                                                                <img
                                                                                    className="avatar-img rounded-circle"
                                                                                    src="assets/img/doctors/doctor-thumb-02.jpg"
                                                                                    alt="User Image"
                                                                                />
                                                                            </a>
                                                                            <a href="doctor-profile.html">
                                                                                Dr. Darren Elder <span>Dental</span>
                                                                            </a>
                                                                        </h2>
                                                                    </td>
                                                                    <td>$300</td>
                                                                    <td>13 Nov 2019</td>
                                                                    <td className="text-right">
                                                                        <div className="table-action">
                                                                            <a
                                                                                href="invoice-view.html"
                                                                                className="btn btn-sm bg-info-light"
                                                                            >
                                                                                {" "}
                                                                                <i className="far fa-eye" /> View{" "}
                                                                            </a>
                                                                            <a
                                                                                href="javascript:void(0);"
                                                                                className="btn btn-sm bg-primary-light"
                                                                            >
                                                                                {" "}
                                                                                <i className="fas fa-print" /> Print{" "}
                                                                            </a>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <a href="invoice-view.html">#INV-0008</a>
                                                                    </td>
                                                                    <td>
                                                                        <h2 className="table-avatar">
                                                                            <a
                                                                                href="doctor-profile.html"
                                                                                className="avatar avatar-sm mr-2"
                                                                            >
                                                                                <img
                                                                                    className="avatar-img rounded-circle"
                                                                                    src="assets/img/doctors/doctor-thumb-03.jpg"
                                                                                    alt="User Image"
                                                                                />
                                                                            </a>
                                                                            <a href="doctor-profile.html">
                                                                                Dr. Deborah Angel <span>Cardiology</span>
                                                                            </a>
                                                                        </h2>
                                                                    </td>
                                                                    <td>$150</td>
                                                                    <td>12 Nov 2019</td>
                                                                    <td className="text-right">
                                                                        <div className="table-action">
                                                                            <a
                                                                                href="invoice-view.html"
                                                                                className="btn btn-sm bg-info-light"
                                                                            >
                                                                                {" "}
                                                                                <i className="far fa-eye" /> View{" "}
                                                                            </a>
                                                                            <a
                                                                                href="javascript:void(0);"
                                                                                className="btn btn-sm bg-primary-light"
                                                                            >
                                                                                {" "}
                                                                                <i className="fas fa-print" /> Print{" "}
                                                                            </a>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <a href="invoice-view.html">#INV-0007</a>
                                                                    </td>
                                                                    <td>
                                                                        <h2 className="table-avatar">
                                                                            <a
                                                                                href="doctor-profile.html"
                                                                                className="avatar avatar-sm mr-2"
                                                                            >
                                                                                <img
                                                                                    className="avatar-img rounded-circle"
                                                                                    src="assets/img/doctors/doctor-thumb-04.jpg"
                                                                                    alt="User Image"
                                                                                />
                                                                            </a>
                                                                            <a href="doctor-profile.html">
                                                                                Dr. Sofia Brient <span>Urology</span>
                                                                            </a>
                                                                        </h2>
                                                                    </td>
                                                                    <td>$50</td>
                                                                    <td>11 Nov 2019</td>
                                                                    <td className="text-right">
                                                                        <div className="table-action">
                                                                            <a
                                                                                href="invoice-view.html"
                                                                                className="btn btn-sm bg-info-light"
                                                                            >
                                                                                {" "}
                                                                                <i className="far fa-eye" /> View{" "}
                                                                            </a>
                                                                            <a
                                                                                href="javascript:void(0);"
                                                                                className="btn btn-sm bg-primary-light"
                                                                            >
                                                                                {" "}
                                                                                <i className="fas fa-print" /> Print{" "}
                                                                            </a>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <a href="invoice-view.html">#INV-0006</a>
                                                                    </td>
                                                                    <td>
                                                                        <h2 className="table-avatar">
                                                                            <a
                                                                                href="doctor-profile.html"
                                                                                className="avatar avatar-sm mr-2"
                                                                            >
                                                                                <img
                                                                                    className="avatar-img rounded-circle"
                                                                                    src="assets/img/doctors/doctor-thumb-05.jpg"
                                                                                    alt="User Image"
                                                                                />
                                                                            </a>
                                                                            <a href="doctor-profile.html">
                                                                                Dr. Marvin Campbell{" "}
                                                                                <span>Ophthalmology</span>
                                                                            </a>
                                                                        </h2>
                                                                    </td>
                                                                    <td>$600</td>
                                                                    <td>10 Nov 2019</td>
                                                                    <td className="text-right">
                                                                        <div className="table-action">
                                                                            <a
                                                                                href="invoice-view.html"
                                                                                className="btn btn-sm bg-info-light"
                                                                            >
                                                                                {" "}
                                                                                <i className="far fa-eye" /> View{" "}
                                                                            </a>
                                                                            <a
                                                                                href="javascript:void(0);"
                                                                                className="btn btn-sm bg-primary-light"
                                                                            >
                                                                                {" "}
                                                                                <i className="fas fa-print" /> Print{" "}
                                                                            </a>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <a href="invoice-view.html">#INV-0005</a>
                                                                    </td>
                                                                    <td>
                                                                        <h2 className="table-avatar">
                                                                            <a
                                                                                href="doctor-profile.html"
                                                                                className="avatar avatar-sm mr-2"
                                                                            >
                                                                                <img
                                                                                    className="avatar-img rounded-circle"
                                                                                    src="assets/img/doctors/doctor-thumb-06.jpg"
                                                                                    alt="User Image"
                                                                                />
                                                                            </a>
                                                                            <a href="doctor-profile.html">
                                                                                Dr. Katharine Berthold{" "}
                                                                                <span>Orthopaedics</span>
                                                                            </a>
                                                                        </h2>
                                                                    </td>
                                                                    <td>$200</td>
                                                                    <td>9 Nov 2019</td>
                                                                    <td className="text-right">
                                                                        <div className="table-action">
                                                                            <a
                                                                                href="invoice-view.html"
                                                                                className="btn btn-sm bg-info-light"
                                                                            >
                                                                                {" "}
                                                                                <i className="far fa-eye" /> View{" "}
                                                                            </a>
                                                                            <a
                                                                                href="javascript:void(0);"
                                                                                className="btn btn-sm bg-primary-light"
                                                                            >
                                                                                {" "}
                                                                                <i className="fas fa-print" /> Print{" "}
                                                                            </a>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <a href="invoice-view.html">#INV-0004</a>
                                                                    </td>
                                                                    <td>
                                                                        <h2 className="table-avatar">
                                                                            <a
                                                                                href="doctor-profile.html"
                                                                                className="avatar avatar-sm mr-2"
                                                                            >
                                                                                <img
                                                                                    className="avatar-img rounded-circle"
                                                                                    src="assets/img/doctors/doctor-thumb-07.jpg"
                                                                                    alt="User Image"
                                                                                />
                                                                            </a>
                                                                            <a href="doctor-profile.html">
                                                                                Dr. Linda Tobin <span>Neurology</span>
                                                                            </a>
                                                                        </h2>
                                                                    </td>
                                                                    <td>$100</td>
                                                                    <td>8 Nov 2019</td>
                                                                    <td className="text-right">
                                                                        <div className="table-action">
                                                                            <a
                                                                                href="invoice-view.html"
                                                                                className="btn btn-sm bg-info-light"
                                                                            >
                                                                                {" "}
                                                                                <i className="far fa-eye" /> View{" "}
                                                                            </a>
                                                                            <a
                                                                                href="javascript:void(0);"
                                                                                className="btn btn-sm bg-primary-light"
                                                                            >
                                                                                {" "}
                                                                                <i className="fas fa-print" /> Print{" "}
                                                                            </a>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <a href="invoice-view.html">#INV-0003</a>
                                                                    </td>
                                                                    <td>
                                                                        <h2 className="table-avatar">
                                                                            <a
                                                                                href="doctor-profile.html"
                                                                                className="avatar avatar-sm mr-2"
                                                                            >
                                                                                <img
                                                                                    className="avatar-img rounded-circle"
                                                                                    src="assets/img/doctors/doctor-thumb-08.jpg"
                                                                                    alt="User Image"
                                                                                />
                                                                            </a>
                                                                            <a href="doctor-profile.html">
                                                                                Dr. Paul Richard <span>Dermatology</span>
                                                                            </a>
                                                                        </h2>
                                                                    </td>
                                                                    <td>$250</td>
                                                                    <td>7 Nov 2019</td>
                                                                    <td className="text-right">
                                                                        <div className="table-action">
                                                                            <a
                                                                                href="invoice-view.html"
                                                                                className="btn btn-sm bg-info-light"
                                                                            >
                                                                                {" "}
                                                                                <i className="far fa-eye" /> View{" "}
                                                                            </a>
                                                                            <a
                                                                                href="javascript:void(0);"
                                                                                className="btn btn-sm bg-primary-light"
                                                                            >
                                                                                {" "}
                                                                                <i className="fas fa-print" /> Print{" "}
                                                                            </a>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <a href="invoice-view.html">#INV-0002</a>
                                                                    </td>
                                                                    <td>
                                                                        <h2 className="table-avatar">
                                                                            <a
                                                                                href="doctor-profile.html"
                                                                                className="avatar avatar-sm mr-2"
                                                                            >
                                                                                <img
                                                                                    className="avatar-img rounded-circle"
                                                                                    src="assets/img/doctors/doctor-thumb-09.jpg"
                                                                                    alt="User Image"
                                                                                />
                                                                            </a>
                                                                            <a href="doctor-profile.html">
                                                                                Dr. John Gibbs <span>Dental</span>
                                                                            </a>
                                                                        </h2>
                                                                    </td>
                                                                    <td>$175</td>
                                                                    <td>6 Nov 2019</td>
                                                                    <td className="text-right">
                                                                        <div className="table-action">
                                                                            <a
                                                                                href="invoice-view.html"
                                                                                className="btn btn-sm bg-info-light"
                                                                            >
                                                                                {" "}
                                                                                <i className="far fa-eye" /> View{" "}
                                                                            </a>
                                                                            <a
                                                                                href="javascript:void(0);"
                                                                                className="btn btn-sm bg-primary-light"
                                                                            >
                                                                                {" "}
                                                                                <i className="fas fa-print" /> Print{" "}
                                                                            </a>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <a href="invoice-view.html">#INV-0001</a>
                                                                    </td>
                                                                    <td>
                                                                        <h2 className="table-avatar">
                                                                            <a
                                                                                href="doctor-profile.html"
                                                                                className="avatar avatar-sm mr-2"
                                                                            >
                                                                                <img
                                                                                    className="avatar-img rounded-circle"
                                                                                    src="assets/img/doctors/doctor-thumb-10.jpg"
                                                                                    alt="User Image"
                                                                                />
                                                                            </a>
                                                                            <a href="doctor-profile.html">
                                                                                Dr. Olga Barlow <span>#0010</span>
                                                                            </a>
                                                                        </h2>
                                                                    </td>
                                                                    <td>$550</td>
                                                                    <td>5 Nov 2019</td>
                                                                    <td className="text-right">
                                                                        <div className="table-action">
                                                                            <a
                                                                                href="invoice-view.html"
                                                                                className="btn btn-sm bg-info-light"
                                                                            >
                                                                                {" "}
                                                                                <i className="far fa-eye" /> View{" "}
                                                                            </a>
                                                                            <a
                                                                                href="javascript:void(0);"
                                                                                className="btn btn-sm bg-primary-light"
                                                                            >
                                                                                {" "}
                                                                                <i className="fas fa-print" /> Print{" "}
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
                                        {/* /Billing Tab */}
                                    </div>
                                    {/* Tab Content */}
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
