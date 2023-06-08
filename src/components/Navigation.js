import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';

export default function Navigation() {
    const { isEnabled, toggleState } = useContext(ThemeContext);

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
                        <Link to='/movies'>Movies</Link>
                    </li>
                    <li>
                        <Link to='/news'>News</Link>
                    </li>
                    <li>
                        <Link to='/my-list'>My List</Link>
                    </li>
                </ul>
                <div className='navbar-profile'>
                    <div className='switch-toggle'>
                        <label className='switch'>
                            <input type='checkbox' checked={isEnabled} onChange={toggleState} />
                            <span className='slider'></span>
                        </label>
                    </div>
                    <img src='./assets/images/avatar.jpg' alt='Profile' className='navbar-profile-img' />
                </div>
            </div>
        </nav>
    );
}