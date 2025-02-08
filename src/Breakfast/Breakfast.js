import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Breakfast.css';

const Breakfast = () => {
  const [breakfastItems, setBreakfastItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

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
        setBreakfastItems(data.meals);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBreakfastItems();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const handleOrderClick = (meal) => {
    navigate('/OrderForm', { state: { mealName: meal.strMeal } });
  };

  return (
    <div className="breakfast-container">
      <h1>Breakfast Items</h1>
      <div className="breakfast-card-container">
        {breakfastItems.map((item) => (
          <div key={item.idMeal} className="breakfast-card">
            <Link to={`/meal-details/${item.idMeal}`}>
              <img
                src={item.strMealThumb}
                alt={item.strMeal}
                className="breakfast-card-img"
              />
            </Link>
            <h3>{item.strMeal}</h3>
            <p className="">$15.99</p> {/* Hardcoded price */}
            <button className="order-button" onClick={() => handleOrderClick(item)}>
              Order
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Breakfast;
