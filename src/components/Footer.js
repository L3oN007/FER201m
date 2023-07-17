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
                                            BirdLove Veterinary Clinic | Trusted Pet Hospital in HCMC Providing the Best Veterinary
                                            Services and Top-notch Veterinary Team, a Reliable Place for Pet Check-ups and Treatment.
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

                            </div>
                            <div className="col-lg-3 col-md-6">

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
                                                76 Le Lai Street, Ben Thanh Ward<br />
                                                District 1, Ho Chi Minh City<br />
                                                Vietnam
                                            </p>
                                        </div>
                                        <p>
                                            <i className="fas fa-phone-alt" />
                                            +84 093 388 8555
                                        </p>
                                        <p className="mb-0">
                                            <i className="fas fa-envelope" />
                                            birdloverclinic@gmail.com
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
