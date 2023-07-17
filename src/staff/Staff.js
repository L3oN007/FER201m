import React, { useEffect, useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import StaffDashboard from './StaffDashboard';

export default function Staff() {
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
            <Breadcrumb />
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
                                            <li>
                                                <NavLink to="customer-dashboard" activeClassName="active">
                                                    <i className="fas fa-columns" />
                                                    <span>Dashboard</span>
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="customer-bird-list">
                                                    <i className="fa fa-tasks" />
                                                    <span>Birds List</span>
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="customer-profile-setting" activeClassName="active">
                                                    <i className="fas fa-user-cog" />
                                                    <span>Profile Settings</span>
                                                </NavLink>
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
                        <Routes>
                            <Route element={<StaffDashboard />} path="staff-dashboard" />
                        </Routes>
                    </div>
                </div>
            </div>
            {/* /Page Content */}
        </>
    );
}
