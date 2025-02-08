import React from "react";
import './Footer.css'; // Ensure correct path to CSS file
import Logo from "../Image/Logo1.jpeg";

function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-top">
                {/* Logo & About */}
                <div className="footer-logo-section">
                    <img src={Logo} alt="Website Logo" className="footer-logo" />
                    <p className="para">Delicious meals, fresh ingredients, and amazing flavors. Order your favorite food anytime, anywhere!</p>
                </div>

                {/* Contact Information */}
                <div className="footer-contact">
                    <h3>Contact Us</h3>
                    <h4>📍 123 Food Street, Food City, Country</h4>
                    <p>📞 <a href="tel:+911234567890">+91 12345 67890</a></p>
                    <p>📧 <a href="mailto:support@foodwebsite.com">support@foodwebsite.com</a></p>
                </div>

                {/* Social Media Links */}
                <div className="footer-social">
                    <h3>Follow Us</h3>
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
            </div>

            {/* Newsletter Subscription */}
            <div className="footer-newsletter">
                <h3>Subscribe to Our Newsletter</h3>
                <form>
                    <input type="email" placeholder="Enter your email" required />
                    <button type="submit">Subscribe</button>
                </form>
            </div>

            {/* Copyright Section */}
            <div className="footer-copy">
                <h2>&copy; 2025 Food Website. All Rights Reserved.</h2>
                <h2>Designed with ❤️ by Food Lovers</h2>
            </div>
        </footer>
    );
}

export default Footer;
