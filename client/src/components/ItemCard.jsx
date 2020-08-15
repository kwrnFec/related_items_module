/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
import React from 'react';
import Card from 'react-bootstrap/Card';
import Modal from './Modal.jsx';

function ItemCard(props) {
  return (
    <div className="item-card">
      <Card style={{ width: '28rem', height: '68rem' }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body className="card-body">
          <Card.Title className="card-title">{props.item.name}</Card.Title>
          <Card.Text className="star-rating">&nbsp;Star Rating Placeholder</Card.Text>
          <Card.Text>{props.item.slogan}</Card.Text>
          <Card.Text>
            Category:
            {props.item.category}
          </Card.Text>
          <Card.Text>
            $
            {props.item.default_price}
          </Card.Text>
          <Card.Text>{props.item.description}</Card.Text>
          <Modal
            currentItem={props.currentItem}
            onClose={props.onClick}
            show={props.show}
            item={props.item}
          />
        </Card.Body>
      </Card>
    </div>
  );
}

export default ItemCard;
