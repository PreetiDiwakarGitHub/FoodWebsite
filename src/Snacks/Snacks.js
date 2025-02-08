import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Snacks = () => {
  const [breakfastItems, setBreakfastItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch breakfast items from API
  useEffect(() => {
    const fetchBreakfastItems = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch breakfast items");
        }
        const data = await response.json();
        console.log("API Response:", data); // Debugging: Check API response
        setBreakfastItems(data.meals || []);
      } catch (err) {
        console.error("Fetch error:", err); // Debugging: Log errors
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBreakfastItems();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="breakfast-container">
      <h1>Breakfast Items</h1>
      <div className="breakfast-card-container">
        {breakfastItems.length > 0 ? (
          breakfastItems.map((item) => (
            <div key={item.idMeal} className="breakfast-card">
              <Link to={`/meal-details/${item.idMeal}`}>
                <img
                  src={item.strMealThumb}
                  alt={item.strMeal}
                  className="breakfast-card-img"
                />
              </Link>
              <h3>{item.strMeal}</h3>
              <p>$15.99</p>

              {/* Click on "Order" text to open OrderForm */}
              <Link to="/orderform" state={{ mealName: item.strMeal }}>
                <p className="order-text">Order</p>
              </Link>
            </div>
          ))
        ) : (
          <p>No breakfast items available.</p>
        )}
      </div>
    </div>
  );
};

export default Snacks;
