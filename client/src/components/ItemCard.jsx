import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from "./Modal.jsx";


const ItemCard = (props) => {
  return (
    <div className="item-card">
      <Card style={{ width: '27rem', height: '70rem' }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body className="card-body" >
          <Card.Title className ="card-title">{props.item.name}</Card.Title>
          <Card.Text>&nbsp;</Card.Text>
          <Card.Text>{props.item.slogan}</Card.Text>
          <Card.Text>Category: {props.item.category}</Card.Text>
          <Card.Text>${props.item.default_price}</Card.Text>
          <Card.Text>{props.item.description}</Card.Text>
            <Modal onClose={props.onClick} show={props.show} item={props.item}>
              Message in Modal
          </Modal>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ItemCard;