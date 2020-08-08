import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ItemCard = (props) => {
  console.log(props.item)
  return (
    <div className="item-card">
      <Card style={{ width: '27rem', height: '25rem' }}>
        <Card.Img variant="top" src="http://placecorgi.com/400/220" />
        <Card.Body className="card-body" >
          <Card.Title>{props.item.name}</Card.Title>
          <Card.Text>{props.item.slogan}</Card.Text>
          <Card.Text>Category: {props.item.category}</Card.Text>
          <Card.Text>${props.item.default_price}</Card.Text>
          <Card.Text>{props.item.description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ItemCard;