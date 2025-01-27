import React from "react";
import Breakfast from "../Image/Breakfast.webp";
import Dinner from "../Image/Dinner.jpg";
import Snacks from "../Image/Snacks.jpg";
import Lunch from "../Image/lunch.jpg";
import { Link, useNavigate } from "react-router-dom";
import "./Product.css";

function Product() {
    const navigate = useNavigate(); // Initialize the navigate function

    // Handler to navigate programmatically
    const handleClick = (route) => {
        navigate(route); // Navigate to the passed route
    };

    return (
        <div className="product-container">
            <div className="product-card">
                <Link to="/breakfast">
                    <img src={Breakfast} alt="Breakfast" />
                </Link>
                <p>Start your day with our delicious breakfast options!</p>
                <button onClick={() => handleClick("/breakfast")}>Breakfast</button> {/* Navigate on button click */}
            </div>
            <div className="product-card">
                <Link to="/dinner">
                    <img src={Dinner} alt="Dinner" />
                </Link>
                <p>Enjoy our special dinner meals for a perfect evening!</p>
                <button onClick={() => handleClick("/dinner")}>Dinner</button> {/* Navigate on button click */}
            </div>
            <div className="product-card">
                <Link to="/snacks">
                    <img src={Snacks} alt="Snacks" />
                </Link>
                <p>Grab a quick bite with our tasty snacks!</p>
                <button onClick={() => handleClick("/snacks")}>Snacks</button> {/* Navigate on button click */}
            </div>
            <div className="product-card">
                <Link to="/lunch">
                    <img src={Lunch} alt="Lunch" />
                </Link>
                <p>Relish our lunch specials for a fulfilling day!</p>
                <button onClick={() => handleClick("/lunch")}>Lunch</button> {/* Navigate on button click */}
            </div>
        </div>
    );
}

export default Product;
