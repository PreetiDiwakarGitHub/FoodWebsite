import React from "react";
import AboutFood from "../AboutFood/AboutFood";
import Makefood from "../Makefood/Makefood";
import Service from "../Service/Service";
import Feedback from "../Feedback/Feedback";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
    return (
        <>
            <div className="Main">
                <div className="Text">
                    <div className="Text-content">
                        <h1 className="Text-title">Vital Bites</h1>
                        <h3 className="Text-subtitle">Fuel Your Day with Healthy, Delicious Snacks from Tandrust Foods.</h3>
                        <p className="Text-description">
                            Tandrust Foods offers healthy, delicious snacks made with natural ingredients, providing a perfect balance of taste and nutrition. Whether you're craving chips, namkeen, or tea, each snack is crafted to support a wholesome lifestyle, making it easy to enjoy guilt-free indulgence.
                        </p>
                    </div>
                    <div className="Text-buttons">
                        <Link to="/products">
                            <button className="button1 product-button">Product</button>
                        </Link>
                        <Link to="/learn">
                            <button className="button1 learn-button">Learn More</button>
                        </Link>
                        <Link to="/contact">
                            <button className="button1 contact-button">Contact Us</button>
                        </Link>
                    </div>
                </div>
            </div>
            <AboutFood className="home-about-food" />
            <Makefood className="home-make-food" />
            <Service className="home-service" />
            <Feedback className="home-feedback" />
        </>
    );
}

export default Home;
