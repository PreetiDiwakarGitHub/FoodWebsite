import React from "react";
import food1 from "../Image/food1.jpeg";
import food2 from "../Image/food2.jpeg";
import food3 from "../Image/food3.jpg";
import "./About.css";

function About() {
    return (
        <>
        <div className="about-images">
            <img src={food1} className="about-img"/>
            <img src={food2} className="about-img"/>
            <img src={food3} className="about-img"/>
        </div>
        <div className="about-content">
            <h1 className="about-heading">About Our Food Restaurant</h1>
            <p className="about-text">
                Welcome to [Restaurant Name], where taste meets tradition! We take pride in serving delicious, high-quality meals crafted with fresh ingredients and authentic flavors. Our menu offers a variety of dishes, from mouth-watering appetizers to satisfying main courses and delightful desserts. Whether you're craving classic comfort food or exploring new flavors, we have something for everyone.
            </p>
            <p className="about-text">
                At [Restaurant Name], we believe in providing a warm and inviting atmosphere for our guests. Our friendly staff is dedicated to delivering excellent service, ensuring a memorable dining experience every time you visit.
            </p>
            <p className="about-text">
                Come and indulge in our carefully curated dishes, made with love and passion. Whether you're dining with family, friends, or colleagues, we guarantee a delightful culinary journey.
            </p>
        </div>
        <div className="about-reason">
            <h1 className="about-heading">Why Choose Us?</h1>
            <p className="about-text">
                At [Restaurant Name], we are passionate about serving delicious food made with fresh ingredients and authentic flavors. 🥗🍲 Our cozy ambiance and friendly staff ensure a welcoming dining experience that feels just like home. 🏡😊 Whether you're enjoying a meal with family, friends, or colleagues, we guarantee top-notch quality, fast service, and a menu that caters to every taste. 🍕🥘 Plus, our affordable prices and exclusive deals make dining with us a delightful experience every time! 💰🎉 Come taste the difference today! 🍴❤️
            </p>
        </div>
        </>
    );
}

export default About;
