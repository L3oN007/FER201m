import React, { useEffect, useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { getUserById } from '../api/UserAPI';
import Breadcrumb from '../components/Breadcrumb';
import AddBird from './AddBird';
import CustomerBirdList from './CustomerBirdList';
import CustomerDashboard from './CustomerDashboard';
import CustomerProfileSetting from './CustomerProfileSetting';
export default function Customer() {
    const [user, setUser] = useState({});

    useEffect(() => {
        const storedLoginData = localStorage.getItem('loginData');
        if (storedLoginData) {
            const loginData = JSON.parse(storedLoginData);
            setUser(loginData.user); // Set initial user data from localStorage
            getUserById(loginData.user.sub)
                .then(userdata => {
                    console.log("userdata: ", userdata);
                    setUser(prevUser => ({ ...prevUser, ...userdata })); // Update user state with additional data
                })
                .catch(error => console.error(error));
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
                                            <h3>{user.lastName} {user.firstName}</h3>
                                            <div className="patient-details">
                                                <h5>
                                                    <i className="fas fa fa-envelope" /> {user.email}
                                                </h5>
                                                <h5 className="mb-0">
                                                    <i className="fas fa-map-marker-alt" /> {user.district}, {user.city}
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

                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        {/* / Profile Sidebar */}
                        <Routes>
                            <Route element={<CustomerDashboard />} path="customer-dashboard" />
                            <Route element={<CustomerProfileSetting />} path="customer-profile-setting" />
                            <Route element={<CustomerBirdList />} path='customer-bird-list' />
                            <Route element={<AddBird />} path='add-bird' />
                        </Routes>
                    </div>
                </div>
            </div>
            {/* /Page Content */}
        </>
    );
}
