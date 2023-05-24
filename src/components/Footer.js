import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container" id='Footer'>
                    <div className="footer-content">
                        <div className="footer-logo">
                            <a href="#Home">Dờ Phút BallClub</a>
                        </div>
                        <ul className="footer-links">
                            <li><a href="#Home">Home</a></li>
                            <li><a href="#Home">News</a></li>
                            <li><a href="#Home">About</a></li>
                            <li><a href="#Home">Contact</a></li>
                        </ul>
                    </div>
                    <p className="footer-text">&copy; 2023, FER201m - Vu Minh Nhat</p>
                </div>
            </footer>
        )
    }
}
