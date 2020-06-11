import React from 'react';
import Card from 'react-bootstrap/Card';
import Rating from './Rating';
import 'bootstrap/dist/css/bootstrap.min.css';

function Review(props) {
    return (
        <Card style={{ userSelect: "none", width: '25%', marginTop: '10px', marginRight: '10px', flex: '1 1 20%', backgroundColor: '#a1f2f2' }}>
            <Card.Body>
                <Card.Title>{props.data.author}</Card.Title>
                <Card.Text> {props.data.body} </Card.Text>
                <Rating rating={props.data.meta.upvotes - props.data.meta.downvotes} id={props.data._id} numOfReviews={props.data.meta.upvotes + props.data.meta.downvotes} />
            </Card.Body>
        </Card>
    )
}

export default Review;