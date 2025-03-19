import React, { useState, useEffect } from "react";
import styles from "./Review.module.css";

const Review = () => {
    const [reviews, setReviews] = useState([]);
    const [name, setName] = useState("");
    const [review, setReview] = useState("");
    const [rating, setRating] = useState(0);

    // Load reviews from local storage on component mount
    useEffect(() => {
        const storedReviews = localStorage.getItem("reviews");
        if (storedReviews) {
            setReviews(JSON.parse(storedReviews));
        }
    }, []);

    // Save reviews to local storage whenever the reviews state changes
    useEffect(() => {
        localStorage.setItem("reviews", JSON.stringify(reviews));
    }, [reviews]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && review && rating > 0) {
            const newReview = { name, review, rating };
            const updatedReviews = [newReview, ...reviews];
            setReviews(updatedReviews);
            setName("");
            setReview("");
            setRating(0);
        } else {
            alert("Please fill all fields and select a rating!");
        }
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Reviews 💫</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={styles.input}
                    required
                />
                <textarea
                    placeholder="Write your review..."
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    className={styles.textarea}
                    required
                />
                <div className={styles.rating}>
                    <span>Rating: </span>
                    {[1, 2, 3, 4, 5].map((star) => (
                        <span
                            key={star}
                            className={rating >= star ? styles.filledStar : styles.emptyStar}
                            onClick={() => setRating(star)}
                        >
                            ★
                        </span>
                    ))}
                </div>
                <button type="submit" className={styles.button}>Submit Review</button>
            </form>

            <div className={styles.reviewList}>
                {reviews.length > 0 ? (
                    reviews.map((rev, index) => (
                        <div key={index} className={styles.reviewCard}>
                            <h3>{rev.name}</h3>
                            <p>{rev.review}</p>
                            <div className={styles.stars}>
                                {"★".repeat(rev.rating)}{"☆".repeat(5 - rev.rating)}
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No reviews yet. Be the first to review!</p>
                )}
            </div>
        </div>
    );
};

export default Review;
