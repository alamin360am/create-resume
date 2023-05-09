import React from 'react';
import './header.css'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <Link to='/' className="nav-logo">
                <img src='/assets/Logo.png' alt="" />
            </Link>
            <div className="nav-link">
                <NavLink to='/' className={({isActive}) => isActive? 'active' : ''}>Home</NavLink>
                <NavLink to='/create' className={({isActive}) => isActive? 'active' : ''}>Create</NavLink>
                <NavLink to='/about' className={({isActive}) => isActive? 'active' : ''}>About Us</NavLink>
                <NavLink to='/contact' className={({isActive}) => isActive? 'active' : ''}>Contact Us</NavLink>
            </div>
        </nav>
    );
};

export default Header;