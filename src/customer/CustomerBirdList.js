import React from 'react'

export default function CustomerBirdList() {
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
                                                <tr>
                                                    <td>
                                                        <h2 className="table-avatar">
                                                            <a
                                                                href="doctor-profile.html"
                                                                className="avatar avatar-sm mr-2"
                                                            >
                                                                <img
                                                                    className="avatar-img rounded-circle"
                                                                    src="../assets/img/bird/bird-1.webp"
                                                                    alt="User Image"
                                                                />
                                                            </a>
                                                            <a href="doctor-profile.html">Charlie</a>
                                                        </h2>
                                                    </td>
                                                    <td>Sparow</td>
                                                    <td>6 Nov 2023</td>
                                                    <td>Male</td>
                                                    <td>1kg</td>
                                                    <td>
                                                        <span className="badge badge-pill bg-danger-light">
                                                            No
                                                        </span>
                                                    </td>
                                                    <td className="text-right">
                                                        <div className="table-action">
                                                            <a
                                                                href="bird-details.html"
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
                                                                    src="../assets/img/bird/bird-2.webp"
                                                                    alt="User Image"
                                                                />
                                                            </a>
                                                            <a href="doctor-profile.html">Lucifer</a>
                                                        </h2>
                                                    </td>
                                                    <td>Cuckoo</td>
                                                    <td>7 Nov 2023</td>
                                                    <td>Female</td>
                                                    <td>1.5kg</td>
                                                    <td>
                                                        <span className="badge badge-pill bg-success-light">
                                                            Yes
                                                        </span>
                                                    </td>
                                                    <td className="text-right">
                                                        <div className="table-action">
                                                            <a
                                                                href="bird-details.html"
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
                                                                    src="../assets/img/bird/bird-3.jpg"
                                                                    alt="User Image"
                                                                />
                                                            </a>
                                                            <a href="doctor-profile.html">Luffy</a>
                                                        </h2>
                                                    </td>
                                                    <td>Red-whiskered</td>
                                                    <td>4 Jun 2023</td>
                                                    <td>Female</td>
                                                    <td>2.2kg</td>
                                                    <td>
                                                        <span className="badge badge-pill bg-success-light">
                                                            Yes
                                                        </span>
                                                    </td>
                                                    <td className="text-right">
                                                        <div className="table-action">
                                                            <a
                                                                href="bird-details.html"
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
                                                                    src="../assets/img/bird/bird-4.jpg"
                                                                    alt="User Image"
                                                                />
                                                            </a>
                                                            <a href="doctor-profile.html">Jacky</a>
                                                        </h2>
                                                    </td>
                                                    <td>Parrot</td>
                                                    <td>1 Nov 2022</td>
                                                    <td>Male</td>
                                                    <td>3kg</td>
                                                    <td>
                                                        <span className="badge badge-pill bg-success-light">
                                                            Yes
                                                        </span>
                                                    </td>
                                                    <td className="text-right">
                                                        <div className="table-action">
                                                            <a
                                                                href="bird-details.html"
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
                    </div>
                    <button className="add-more">
                        <a href="assignPet.html" alt="">
                            Add more+
                        </a>
                    </button>
                    {/* Tab Content */}
                </div>
            </div>
        </div>

    )
}
