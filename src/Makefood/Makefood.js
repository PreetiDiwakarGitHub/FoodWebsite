import React from "react";
import './Makefood.css'; // Path to your CSS file

function Makefood() {

    return (
        <>
            <div className="MakeFood">
                <h1>How to Make Food</h1>
                <div className="Main-container">
                    <div>
                        <p>
                            To make food, start by selecting the ingredients you need based on the recipe you're following, whether it's for a simple dish or a more complex one. Prepare the ingredients by washing, chopping, or marinating them as required. Then, choose the right cooking method—whether frying, boiling, baking, or steaming—and make sure to follow the recipe's instructions for heat levels and cooking times. Always taste and adjust the seasoning to your preference. Once the dish is ready, plate it beautifully, and enjoy the food you've made with love and care!

                        </p>
                    </div>
                    <div className="iframe-main">


                        <div className="iframe-container">
                            <iframe
                                src="https://www.youtube.com/embed/_CTkh6jIp10?si=QRE7dC0PjqRzDVQi" // Embed format URL
                                title="YouTube video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="iframe-container">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/419LG8O3ljc?si=smD_1TlrYCBIz5Bg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <div className="iframe-container">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/EE5P1w0z1Nw?si=MODx4On_tlh8i6qM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Makefood;