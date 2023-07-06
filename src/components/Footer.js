import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                {/* Footer Top */}
                <div className="footer-top">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                {/* Footer Widget */}
                                <div className="footer-widget footer-about">
                                    <a href="#" class="footer-logo">
                                        <h1 className='mb-2'>
                                            <span class="text-primary">Bird</span><span class="text-white">Lover</span>
                                        </h1>
                                    </a>

                                    <div className="footer-about-content">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </p>
                                        <div className="social-icon">
                                            <ul>
                                                <li>
                                                    <a href="#" target="_blank">
                                                        <i className="fab fa-facebook-f" />{" "}
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" target="_blank">
                                                        <i className="fab fa-twitter" />{" "}
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" target="_blank">
                                                        <i className="fab fa-linkedin-in" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" target="_blank">
                                                        <i className="fab fa-instagram" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" target="_blank">
                                                        <i className="fab fa-dribbble" />{" "}
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* /Footer Widget */}
                            </div>
                            <div className="col-lg-3 col-md-6">
                                {/* Footer Widget */}
                                <div className="footer-widget footer-menu">
                                    <h2 className="footer-title">For Patients</h2>
                                    <ul>
                                        <li>
                                            <a href="search.html">
                                                <i className="fas fa-angle-double-right" /> Search for
                                                Doctors
                                            </a>
                                        </li>
                                        <li>
                                            <a href="login.html">
                                                <i className="fas fa-angle-double-right" /> Login
                                            </a>
                                        </li>
                                        <li>
                                            <a href="register.html">
                                                <i className="fas fa-angle-double-right" /> Register
                                            </a>
                                        </li>
                                        <li>
                                            <a href="booking.html">
                                                <i className="fas fa-angle-double-right" /> Booking
                                            </a>
                                        </li>
                                        <li>
                                            <a href="patient-dashboard.html">
                                                <i className="fas fa-angle-double-right" /> Patient
                                                Dashboard
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                {/* /Footer Widget */}
                            </div>
                            <div className="col-lg-3 col-md-6">
                                {/* Footer Widget */}
                                <div className="footer-widget footer-menu">
                                    <h2 className="footer-title">For Doctors</h2>
                                    <ul>
                                        <li>
                                            <a href="appointments.html">
                                                <i className="fas fa-angle-double-right" /> Appointments
                                            </a>
                                        </li>
                                        <li>
                                            <a href="chat.html">
                                                <i className="fas fa-angle-double-right" /> Chat
                                            </a>
                                        </li>
                                        <li>
                                            <a href="login.html">
                                                <i className="fas fa-angle-double-right" /> Login
                                            </a>
                                        </li>
                                        <li>
                                            <a href="doctor-register.html">
                                                <i className="fas fa-angle-double-right" /> Register
                                            </a>
                                        </li>
                                        <li>
                                            <a href="doctor-dashboard.html">
                                                <i className="fas fa-angle-double-right" /> Doctor Dashboard
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                {/* /Footer Widget */}
                            </div>
                            <div className="col-lg-3 col-md-6">
                                {/* Footer Widget */}
                                <div className="footer-widget footer-contact">
                                    <h2 className="footer-title">Contact Us</h2>
                                    <div className="footer-contact-info">
                                        <div className="footer-address">
                                            <span>
                                                <i className="fas fa-map-marker-alt" />
                                            </span>
                                            <p>
                                                3556 Beech Street, San Francisco,
                                                <br />
                                                California, CA 94108
                                            </p>
                                        </div>
                                        <p>
                                            <i className="fas fa-phone-alt" />
                                            +1 315 369 5943
                                        </p>
                                        <p className="mb-0">
                                            <i className="fas fa-envelope" />
                                            doccure@example.com
                                        </p>
                                    </div>
                                </div>
                                {/* /Footer Widget */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* /Footer Top */}
                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <div className="container-fluid">
                        {/* Copyright */}
                        <div className="copyright">
                            <div className="row">
                                <div className="col-md-6 col-lg-6">
                                    <div className="copyright-text">
                                        <p className="mb-0">
                                            <a href="templateshub.net">Templates Hub</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-6">
                                    {/* Copyright Menu */}
                                    <div className="copyright-menu">
                                        <ul className="policy-menu">
                                            <li>
                                                <a href="term-condition.html">Terms and Conditions</a>
                                            </li>
                                            <li>
                                                <a href="privacy-policy.html">Policy</a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* /Copyright Menu */}
                                </div>
                            </div>
                        </div>
                        {/* /Copyright */}
                    </div>
                </div>
                {/* /Footer Bottom */}
            </footer>
        )
    }
}
