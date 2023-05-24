import React, { Component } from 'react'

export default class Navigation extends Component {
    render() {
        return (
            <nav className="navbar">
                <div className="container">
                    <a className="navbar-logo" href="#Home">Nét Phíc</a>
                    <ul className="navbar-menu">
                        <li><a href="#Home">Home</a></li>
                        <li><a href="#Home">TV Shows</a></li>
                        <li><a href="#Home">Movies</a></li>
                        <li><a href="#Home">New Releases</a></li>
                        <li><a href="#Home">My List</a></li>
                    </ul>
                    <div className="navbar-profile">
                        <img src="./assets/images/avatar.jpg" alt="Profile" className="navbar-profile-img" />
                    </div>
                </div>
            </nav>
        )
    }
}
