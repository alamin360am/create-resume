import React from 'react';
import './footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer-logo">
                <img src="./../../../../public/assets/Logo.png" alt="Logo" />
            </div>
            <p>All right reserve @alamin</p>
            <ul className="footer-link">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/create'>Create</Link></li>
                <li><Link to='/about'>About Us</Link></li>
                <li><Link to='/contact'>Contact Us</Link></li>
            </ul>
        </footer>
    );
};

export default Footer;