import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './OrderForm.css';

function OrderForm() {
  const location = useLocation();
  const selectedMeal = location.state?.mealName || '';

  const [order, setOrder] = useState({
    name: '',
    phone: '',
    address: '',
    foodItem: selectedMeal,
    quantity: 1,
    paymentMethod: 'Cash on Delivery',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder((prevOrder) => ({
      ...prevOrder,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="order-form-container">
      <h2>🥗 Place Your Food Order 🍽️</h2>
      {submitted ? (
        <div className="success-message">
          <h3>🎉 Order Confirmed! 🎉</h3>
          <p>Thank you, <strong>{order.name}</strong>! Your order for <strong>{order.quantity} {order.foodItem}(s)</strong> has been placed successfully. 🍔🍕</p>
          <p>📞 Contact: {order.phone}</p>
          <p>📍 Delivery Address: {order.address}</p>
          <p>💳 Payment Method: {order.paymentMethod}</p>
          <p className="delivery-time">⏳ Estimated Delivery Time: 30-45 mins</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="order-form">
          <div className="form-group">
            <label>👤 Name:</label>
            <input type="text" name="name" value={order.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>📞 Phone Number:</label>
            <input type="tel" name="phone" value={order.phone} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>🏠 Address:</label>
            <textarea name="address" value={order.address} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>🍽️ Food Item:</label>
            <input type="text" name="foodItem" value={order.foodItem} readOnly />
          </div>
          <div className="form-group">
            <label>🔢 Quantity:</label>
            <input type="number" name="quantity" value={order.quantity} onChange={handleChange} min="1" required />
          </div>
          <div className="form-group">
            <label>💳 Payment Method:</label>
            <select name="paymentMethod" value={order.paymentMethod} onChange={handleChange}>
              <option value="Cash on Delivery">Cash on Delivery</option>
              <option value="Credit/Debit Card">Credit/Debit Card</option>
              <option value="UPI">UPI (Google Pay, PhonePe, Paytm)</option>
            </select>
          </div>
          <button type="submit" className="order-button">🛒 Place Order</button>
        </form>
      )}
    </div>
  );
}

export default OrderForm;
