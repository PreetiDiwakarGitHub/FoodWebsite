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
          We are committed to providing you with delicious meals that are not only flavorful but also prepared with the highest standards of safety and hygiene. Every dish is crafted using fresh, high-quality ingredients to ensure you have an exceptional dining experience. From the first bite to the last, we aim to exceed your expectations and leave you satisfied with every meal. Our chefs take great pride in presenting food that is both safe to consume and bursting with taste.
        </p>
      </div>

      <div id="food2-container" className="food-item">
        <p id="food2-description" className="food-description">
          Our chefs and staff follow strict safety protocols to ensure your food is safe to eat. We believe that great food comes from great care, which is why we go the extra mile to maintain cleanliness and ensure the highest standards of food preparation. Whether you're dining in or ordering out, our kitchen is always kept to the highest hygiene standards, so you can enjoy your meal with peace of mind. Every ingredient we use is sourced from trusted suppliers, ensuring only the best reaches your table.
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
          Our chefs and staff follow strict safety protocols to ensure your food is safe to eat. We believe that great food comes from great care, which is why we go the extra mile to maintain cleanliness and ensure the highest standards of food preparation. Whether you're dining in or ordering out, our kitchen is always kept to the highest hygiene standards, so you can enjoy your meal with peace of mind. Every ingredient we use is sourced from trusted suppliers, ensuring only the best reaches your table.
        </p>
      </div>
    </>
  );
}

export default AboutFood;
