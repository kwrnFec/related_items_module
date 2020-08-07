import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ItemCard = (props) => {
  console.log(props.item)
  return (
  <div>
    <Card style={{ width: '20rem', height: '32rem'}}>
  <Card.Img variant="top" src="http://placecorgi.com/260/180"/>
  <Card.Body>
    <Card.Title>{props.item.name}</Card.Title>
    <Card.Text>{props.item.slogan}</Card.Text>
    <Card.Text>Category: {props.item.category}</Card.Text>
    <Card.Text>{props.item.description}</Card.Text>
  </Card.Body>
</Card>
    </div>
  );
}

export default ItemCard;