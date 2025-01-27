import React from "react";
import './Footer.css'; // Path to your CSS file

function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-links">
            </div>
            <div className="footer-social">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-facebook"></i> Facebook
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-twitter"></i> Twitter
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-instagram"></i> Instagram
                </a>
            </div>
            <div className="footer-contact">
                <p>Contact us at: <a href="mailto:info@foodwebsite.com">info@foodwebsite.com</a></p>
            </div>
            <div className="footer-copy">
                <p>&copy; 2025 Food Website. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
