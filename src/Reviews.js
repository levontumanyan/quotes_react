import React, { useState, useEffect } from 'react';
import Review from './Review';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Reviews.module.css';
const fetch = require('node-fetch');

function Reviews() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [reviews, setReviews] = useState([]);

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch("https://quotes-api-fib.herokuapp.com/all_quotes")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setReviews(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <ul className={styles.reviews_ul}>
                {reviews.map(review => (
                    <Review key={review._id} data={review} />
                ))}
            </ul>
        );
    }
}

export default Reviews;