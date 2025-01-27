import React, { useState } from "react";
import './Feedback.css'; // Path to your CSS file

function Feedback() {
    const [name, setName] = useState("");
    const [rating, setRating] = useState(1);
    const [comments, setComments] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Process the feedback (e.g., send to a server, or store in state)
        setSubmitted(true);
    };

    return (
        <div className="feedback-container">
            <h2>Food Feedback Form</h2>
            {submitted ? (
                <div className="thank-you-message">
                    <h3>Thank you for your feedback, {name}!</h3>
                    <p>Your feedback helps us improve our food quality!</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="feedback-form">
                    <label htmlFor="name">Your Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

                    <label htmlFor="rating">Rating:</label>
                    <select
                        id="rating"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                    >
                        <option value="1">1 - Poor</option>
                        <option value="2">2 - Fair</option>
                        <option value="3">3 - Good</option>
                        <option value="4">4 - Very Good</option>
                        <option value="5">5 - Excellent</option>
                    </select>

                    <label htmlFor="comments">Additional Comments:</label>
                    <textarea
                        id="comments"
                        value={comments}
                        onChange={(e) => setComments(e.target.value)}
                        rows="4"
                        placeholder="Share your experience with us..."
                    ></textarea>

                    <button type="submit">Submit Feedback</button>
                </form>
            )}
        </div>
    );
}

export default Feedback;
