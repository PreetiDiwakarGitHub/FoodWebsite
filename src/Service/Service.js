import React from "react";
import service from "../Image/service.jpg";
import service1 from "../Image/service1.webp";
import sevice from "../Image/sevice.webp";
import "./Service.css";
function Service(){
    return(
        <>
        <div className="Service">
                <h1>Our Services</h1>
                <div className="food_Text">
                    <div>
                        <h1>Ensuring Freshness and Safety</h1>
                        <p>We take pride in delivering meals that are not only delicious but also prepared with the highest standards of cleanliness and care. From sourcing fresh, high-quality ingredients to carefully cooking and packaging each dish, we follow strict hygiene protocols. Our dedication to food safety guarantees that every meal reaches you fresh, healthy, and free from contamination.</p>
                    </div>
                    <div>
                        <img src={service} />
                    </div>
                </div>
                <div className="food_Text">
                    <div>
                        <img src={service1} />
                    </div>
                    <div>
                        <h1>Our Promise of Taste and Safety</h1>
                        <p>We serve every meal with freshness, quality, and love. Our dishes are not only delicious but also prepared while maintaining the highest standards of hygiene and safety. Each dish is crafted to not only satisfy your hunger but also provide you with a memorable taste experience. We believe that good food brings joy, and we strive to make every bite a delightful one.</p>
                    </div>
                </div>
                <div className="food_Text">

                    <div>
                        <h1>Focus on Cleanliness and Nutrition</h1>
                        <p>
                        From selecting fresh and pure ingredients to careful cooking and proper packaging, we ensure hygiene at every step. Every process in our kitchen is meticulously followed to maintain the quality of your food. Our goal is to serve you healthy, nutritious, and high-quality meals, ensuring that every bite is filled with freshness and flavor. We are committed to providing meals that are not only tasty but also rich in essential nutrients, making sure that you get the best balance of taste and health.
                        </p>
                    </div>
                    <div>
                        <img src={sevice} />
                    </div>
                </div>
            </div>
        </>
    )

}
export default Service;
