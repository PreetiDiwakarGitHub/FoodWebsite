import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../Image/Logo1.jpeg";  // Ensure the path to your logo image is correct
import './Header.css';

function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <header className="header">
            <div className="logo">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="hamburger" onClick={toggleNav}>
                &#9776;
            </div>
            <nav className={`nav ${isNavOpen ? 'active' : ''}`}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
            </nav>
            <div className="cta-buttons">
                <Link to="/learn">
                    <button className="cta-button">Learn More</button>
                </Link>
            </div>
        </header>
    );
}

export default Header;
