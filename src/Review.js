import React from 'react';
import Card from 'react-bootstrap/Card';
import Rating from './Rating';
import 'bootstrap/dist/css/bootstrap.min.css';

function Review(props) {
    return (
        <Card style={{ width: '18rem', marginTop: '10px' }}>
            <Card.Body>
                <Card.Title>{props.data.author}</Card.Title>
                <Card.Text> {props.data.body} </Card.Text>
                <Rating rating={props.data.meta.upvotes - props.data.meta.downvotes} id={props.data._id} numOfReviews={props.data.meta.upvotes + props.data.meta.downvotes} />
                {/* <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link> */}
            </Card.Body>
        </Card>
    )
}

export default Review;