import React from "react";
import food1 from "../Image/food1.jpeg";
import food2 from "../Image/food2.jpeg";
import food3 from "../Image/food3.jpg";
import "./AboutFood.css";

function AboutFood() {
  return (
    <>
      <div id="food1-container" className="food-item">
        <div>
          <img src={food1} alt="Food 1" id="food1-image" className="food-image" />
        </div>
        <p id="food1-description" className="food-description">
        <h2>Our Commitment to Quality & Safety</h2>
        We are dedicated to providing you with delicious meals that are not only rich in flavor but also prepared with the highest standards of safety and hygiene. Every dish is crafted using fresh, high-quality ingredients to ensure an exceptional dining experience. From the first bite to the last, we strive to exceed your expectations, delivering food that is both safe to consume and bursting with taste. Our chefs take great pride in maintaining strict hygiene protocols, ensuring that every meal is prepared with care, passion, and a commitment to excellence.

         
        </p>
      </div>

      <div id="food2-container" className="food-item">
        <p id="food2-description" className="food-description">
          <h2>Our Commitment to Cleanliness and Safety</h2>
          We follow strict safety standards to ensure that every meal is healthy, hygienic, and delicious. Our kitchen prioritizes cleanliness and quality, ensuring that every dish is safe and nutritious. Whether you dine in or order at home, we make sure that every meal is prepared with utmost care and safety, so you can enjoy your food worry-free.
        </p>
        <div>
          <img src={food2} alt="Food 2" id="food2-image" className="food-image" />
        </div>
      </div>

      <div id="food3-container" className="food-item">
        <div>
          <img src={food3} alt="Food 3" id="food3-image" className="food-image" />
        </div>
        <p id="food3-description" className="food-description">
          <h2>Our Promise of Ingredients and Quality</h2>
          We believe that great food comes from great ingredients, which is why we source all our ingredients from trusted and certified suppliers. Every vegetable, spice, and grain is quality-checked before being used, ensuring that every dish remains fresh and nutritious. Our chefs prepare each dish with love and tradition, so that every bite offers you the finest taste and premium quality.
        </p>
      </div>
    </>
  );
}

export default AboutFood;
