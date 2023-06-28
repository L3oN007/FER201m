import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';

export default function Navigation() {
    const { isEnabled, toggleState } = useContext(ThemeContext);
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        // Handle option click logic here
        console.log(`Selected option: ${option}`);
        // Close the dropdown after selecting an option
        setIsOpen(false);
    };

    return (
        <nav className={isEnabled ? 'navbar navbar-dark' : 'navbar navbar-light'}>
            <div className='container'>
                <Link className='navbar-logo' to='/'>
                    Nét Phíc
                </Link>
                <ul className='navbar-menu'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                    <li>
                        <Link to='/news'>News</Link>
                    </li>
                    <li>
                        <Link to='/my-list'>My List</Link>
                    </li>
                </ul>
                <div className="navbar-profile">
                    <div className='switch-toggle'>
                        <label className='switch'>
                            <input type='checkbox' checked={isEnabled} onChange={toggleState} />
                            <span className='slider'></span>
                        </label>
                    </div>
                    <div className="dropdown">
                        <button className="dropdown-toggle" onClick={toggleDropdown}>
                            <img src="./assets/images/avatar.jpg" alt="Profile" className="navbar-profile-img" />
                        </button>
                        {isOpen && (
                            <ul className="dropdown-menu">
                                <li>
                                    <Link to='/dashboard' className="dropdown-option" onClick={() => handleOptionClick('Dashboard')}>
                                        <i class="fa-solid fa-gauge"></i>Dashboard
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/user-setting' className="dropdown-option" onClick={() => handleOptionClick('Settings')}>
                                        <i class="fa-solid fa-gear"></i>Settings
                                    </Link>
                                </li>
                                <li>
                                    <a href='#' className="dropdown-option" onClick={() => handleOptionClick('Logout')}>
                                        <i class="fa-solid fa-right-from-bracket"></i>Logout
                                    </a>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}