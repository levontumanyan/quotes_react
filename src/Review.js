import React from 'react';
import Card from 'react-bootstrap/Card';
import Rating from './Rating';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Review.module.css';

function Review(props) {
    return (
        <Card className={styles.reviews_card}>
            <Card.Body>
                <Card.Title>{props.data.author}</Card.Title>
                <Card.Text> {props.data.body} </Card.Text>
                <Rating rating={props.data.meta.upvotes - props.data.meta.downvotes} id={props.data._id} numOfReviews={props.data.meta.upvotes + props.data.meta.downvotes} />
            </Card.Body>
        </Card>
    )
}

export default Review;