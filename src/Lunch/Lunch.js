import React, { useState, useEffect } from "react";
import "./Lunch.css"; // Make sure to import the updated CSS file

const Lunch = () => {
  const [meal, setMeal] = useState(""); // State for meal search input
  const [mealsList, setMealsList] = useState([]); // State for fetched meals
  const [error, setError] = useState(null); // State for error message
  const [orderedMeals, setOrderedMeals] = useState([]); // Track ordered meals by ID

  // Function to fetch meals from the API
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

  // Fetch meals on component mount
  useEffect(() => {
    fetchMeals(); // Fetch a default list of meals
  }, []);

  // Function to handle search action
  const searchMeals = () => {
    fetchMeals(meal);
  };

  // Function to handle food order for a specific meal
  const orderFood = (mealId) => {
    setOrderedMeals((prevOrderedMeals) => [...prevOrderedMeals, mealId]);
  };

  return (
    <div className="meal-search-container">
      <h1>Meal Search</h1>
      <input
        type="text"
        placeholder="Search for a meal"
        value={meal}
        onChange={(e) => setMeal(e.target.value)}
      />
      <button onClick={searchMeals}>Search</button>

      {error && <p className="error">{error}</p>}

      {mealsList.length > 0 ? (
        <div className="meals-list">
          {mealsList.map((meal, index) => (
            <div key={index} className="meal-item">
              <h3>{meal.strMeal}</h3>
              <img src={meal.strMealThumb} alt={meal.strMeal} />
              <button onClick={() => orderFood(meal.idMeal)}>
                Order Food
              </button>

              {orderedMeals.includes(meal.idMeal) && (
                <p>Food successfully ordered!</p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p>No meals found</p>
      )}
    </div>
  );
};

export default Lunch;
