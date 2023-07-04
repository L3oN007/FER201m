import jwt_decode from "jwt-decode";
import React, { useEffect, useState } from "react";
import "../assets/css/bootstrap.min.css";
import "../assets/css/style.css";

export default function Navigation() {
    const [user, setUser] = useState({});
    const [isSignedIn, setIsSignedIn] = useState(false);

    function handleCredentialResponse(response) {
        console.log("Encoded JWT ID token: " + response.credential);
        var userObject = jwt_decode(response.credential);
        console.log(userObject);
        setUser(userObject);
        setIsSignedIn(true);

        // Set expiration time to 1 week (7 days)
        const expirationTime = new Date().getTime() + 7 * 24 * 60 * 60 * 1000;
        const loginData = { user: userObject, expiresAt: expirationTime };
        localStorage.setItem("loginData", JSON.stringify(loginData));
    }

    function handleSignOut() {
        setUser({});
        setIsSignedIn(false);
        localStorage.removeItem("loginData");
    }

    useEffect(() => {
        /* global google */
        window.onload = function () {
            google.accounts.id.initialize({
                client_id: "759147664814-2ev30vu5un4p8tchmldu5ta9s0rnpr4g.apps.googleusercontent.com",
                callback: handleCredentialResponse,
            });

            google.accounts.id.renderButton(document.getElementById("signInDiv"), {
                theme: "outline",
                size: "large",
            });
            google.accounts.id.prompt(); // also display the One Tap dialog
        };

        // Retrieve login data from localStorage on component mount
        const storedLoginData = localStorage.getItem("loginData");
        if (storedLoginData) {
            const loginData = JSON.parse(storedLoginData);
            // Check if login has expired
            if (loginData.expiresAt > new Date().getTime()) {
                setUser(loginData.user);
                setIsSignedIn(true);
            } else {
                // Remove expired login data
                localStorage.removeItem("loginData");
            }
        }
    }, []);

    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg header-nav">
                <div className="navbar-header">
                    <a id="mobile_btn" href="javascript:void(0);">
                        <span className="bar-icon">
                            <span />
                            <span />
                            <span />
                        </span>
                    </a>
                    <a href="index.html" className="navbar-brand logo">
                        <img src="../assets/img/logo2.png" className="img-fluid" alt="Logo" />
                    </a>
                </div>
                <div className="main-menu-wrapper">
                    <div className="menu-header">
                        <a href="index.html" className="menu-logo">
                            <img src="../assets/img/logo.png" className="img-fluid" />
                        </a>
                        <a id="menu_close" className="menu-close" href="javascript:void(0);">
                            <i className="fas fa-times" />
                        </a>
                    </div>
                    <ul className="main-nav">
                        <li className="active">
                            <a href="index.html">Home</a>
                        </li>
                        <li className="has-submenu">
                            <a href="#">
                                Owners <i className="fas fa-chevron-down" />
                            </a>
                            <ul className="submenu">
                                <li>
                                    <a href="search.html">Search Doctor</a>
                                </li>
                                <li>
                                    <a href="doctor-profile.html">Doctor Profile</a>
                                </li>
                                <li>
                                    <a href="booking.html">Booking</a>
                                </li>
                                <li>
                                    <a href="checkout.html">Checkout</a>
                                </li>
                                <li>
                                    <a href="booking-success.html">Booking Success</a>
                                </li>
                                <li>
                                    <a href="patient-dashboard.html">Patient Dashboard</a>
                                </li>
                                <li>
                                    <a href="favourites.html">Favourites</a>
                                </li>
                                <li>
                                    <a href="chat.html">Chat</a>
                                </li>
                                <li>
                                    <a href="profile-settings.html">Profile Settings</a>
                                </li>
                                <li>
                                    <a href="change-password.html">Change Password</a>
                                </li>
                            </ul>
                        </li>
                        <li className="login-link">
                            <a href="login.html">Login / Signup</a>
                        </li>
                    </ul>
                </div>
                <ul className="nav header-navbar-rht">
                    <li className="nav-item contact-item">
                        <div className="header-contact-img">
                            <i className="far fa-hospital" />
                        </div>
                        <div className="header-contact-detail">
                            <p className="contact-header">Contact</p>
                            <p className="contact-info-header">+1 315 369 5943</p>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a href="booking-list.html" className="btn btn-lg btn-primary px-4">
                            Book Now
                        </a>
                        {/* <a class="nav-link header-login" href="login.html">login / Signup </a> */}
                    </li>
                    {/* User Menu */}
                    {isSignedIn && Object.keys(user).length > 0 ? (
                        <li className="nav-item dropdown has-arrow logged-item">
                            <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
                                <span className="user-img">
                                    <img
                                        className="rounded-circle"
                                        src={user.picture}
                                        width={31}
                                        alt="Ryan Taylor"
                                    />
                                </span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                                <div className="user-header">
                                    <div className="avatar avatar-sm">
                                        <img
                                            src={user.picture}
                                            alt="User Image"
                                            className="avatar-img rounded-circle"
                                        />
                                    </div>
                                    <div className="user-text">
                                        <h6>{user.name}</h6>
                                        <span className="badge badge-soft-success">Customer</span>
                                        {/* <p className="text-muted mb-0">Patient</p> */}
                                    </div>
                                </div>
                                <a className="dropdown-item" href="patient-dashboard.html">
                                    <i class="fa-solid fa-gauge dropdown-menu-icon"></i>Dashboard
                                </a>
                                <a className="dropdown-item" href="profile-settings.html">
                                    <i class="fa-solid fa-user dropdown-menu-icon"></i>Profile Settings
                                </a>
                                <button className="dropdown-item" onClick={handleSignOut} >
                                    <i class="fa-solid fa-right-from-bracket dropdown-menu-icon"></i>Logout
                                </button>
                            </div>
                        </li>
                    ) : (
                        <li className="nav-item">
                            <div id="signInDiv"></div>
                        </li>
                    )}
                </ul>
            </nav>
            <div id="signInDiv"></div>
        </header>


    );
}
