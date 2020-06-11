import React, { useState } from 'react';
//import { IoIosStar, IoIosStarOutline } from 'react-icons/io';
import { IoIosThumbsUp, IoMdThumbsDown } from "react-icons/io";


function Rating(props) {

    const [rating, setRating] = useState(props.rating);
    const [numOfReviews, setnumOfReviews] = useState(props.numOfReviews);

    async function postUpvote(url = `https://quotes-api-fib.herokuapp.com/rate_quote/${props.id}/upvote`) {
        // Default options are marked with *
        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors' // no-cors, *cors, same-origin
        });
        return response.json(); // parses JSON response into native JavaScript objects
    }

    async function postDownvote(url = `https://quotes-api-fib.herokuapp.com/rate_quote/${props.id}/downvote`) {
        // Default options are marked with *
        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors' // no-cors, *cors, same-origin
        });
        return response.json(); // parses JSON response into native JavaScript objects
    }

    return (
        <div>
            <IoIosThumbsUp style={{ cursor: 'pointer', marginBottom: '1%' }} onClick={function () { setRating(rating + 1); postUpvote(); setnumOfReviews(numOfReviews + 1) }} />
            <IoMdThumbsDown style={{ cursor: 'pointer', marginBottom: '1%' }} onClick={function () { setRating(rating - 1); postDownvote(); setnumOfReviews(numOfReviews + 1) }} />
            <h1>{rating}</h1>
            <h4>Reviewed, {numOfReviews} times</h4>
        </div>

    );
}

export default Rating;