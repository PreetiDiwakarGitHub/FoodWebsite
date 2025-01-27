import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './OrderForm.css';

function OrderForm() {
  const location = useLocation();
  const selectedMeal = location.state?.mealName || '';

  const [order, setOrder] = useState({
    name: '',
    foodItem: selectedMeal,
    quantity: 1,
  });

  const [submitted, setSubmitted] = useState(false); // State to track submission

  const foodOptions = ['Pizza', 'Burger', 'Pasta', 'Salad', 'Sandwich'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder((prevOrder) => ({
      ...prevOrder,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);  // Set form as submitted
  };

  return (
    <div className="order-form-container">
      <h2>Food Order Form</h2>
      {submitted ? (
        <div className="success-message">
          <h3>Form successfully submitted!</h3>
          <p>Thank you for your order, <strong>{order.name}</strong>. Your <strong>{order.foodItem}</strong> order of <strong>{order.quantity}</strong> has been placed successfully.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={order.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Food Item:</label>
            <select name="foodItem" value={order.foodItem} onChange={handleChange} required>
              <option value="">Select a food item</option>
              {foodOptions.map((food, index) => (
                <option key={index} value={food}>{food}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Quantity:</label>
            <input
              type="number"
              name="quantity"
              value={order.quantity}
              onChange={handleChange}
              min="1"
              required
            />
          </div>
          <button type="submit">Place Order</button>
        </form>
      )}
    </div>
  );
}

export default OrderForm;
