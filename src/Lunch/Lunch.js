import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Lunch.css';

const Lunch = () => {
  const [meal, setMeal] = useState("");
  const [mealsList, setMealsList] = useState([]);
  const [error, setError] = useState(null);
  const [orderedMeals, setOrderedMeals] = useState([]);
  const navigate = useNavigate();

  // Function to fetch meals
  const fetchMeals = async (searchTerm = "") => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.meals) {
        setMealsList(data.meals);
        setError(null);
      } else {
        setMealsList([]);
        setError("No meals found");
      }
    } catch (err) {
      setError("Error fetching meals");
    }
  };

  // Fetch meals on mount
  useEffect(() => {
    fetchMeals();
  }, []);

  // Search function
  const searchMeals = () => {
    fetchMeals(meal);
  };

  // Navigate to the OrderForm component when "Order Food" is clicked
  const orderFood = (mealId, mealName) => {
    navigate('/order-form', { state: { mealId, mealName } });
  };

  return (
    <div className="meal-search-container">
      <h1>Lunch Meals</h1>
      <input
        type="text"
        placeholder="Search for a meal"
        value={meal}
        onChange={(e) => setMeal(e.target.value)}
      />
      <button onClick={searchMeals}>Search</button>

      {error && <p className="error">{error}</p>}

      <div className="meals-list">
        {mealsList.length > 0 ? (
          mealsList.map((meal, index) => (
            <div key={index} className="meal-item">
              <img src={meal.strMealThumb} alt={meal.strMeal} />
              <p>₹{Math.floor(Math.random() * 100) + 50}</p> {/* Random Price */}
              <button onClick={() => orderFood(meal.idMeal, meal.strMeal)}>Order Food</button>
              {orderedMeals.includes(meal.idMeal) && (
                <p>Food successfully ordered!</p>
              )}
            </div>
          ))
        ) : (
          <p>No meals found</p>
        )}
      </div>
    </div>
  );
};

export default Lunch;
