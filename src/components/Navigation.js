import { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Navigation extends Component {
    render() {
        return (
            <nav className="navbar">
                <div className="container">
                    <Link className="navbar-logo" to="/">Nét Phíc</Link>
                    <ul className="navbar-menu">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/movies">Movies</Link></li>
                        <li><Link to="/new-releases">New Releases</Link></li>
                        <li><Link to="/my-list">My List</Link></li>
                    </ul>
                    <div className="navbar-profile">
                        <img src="./assets/images/avatar.jpg" alt="Profile" className="navbar-profile-img" />
                    </div>
                </div>
            </nav>

        )
    }
}
