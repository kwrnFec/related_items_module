/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Modal from './Modal.jsx';

function ItemCard(props) {
  return (
    <div className="item-card">
      <Col>
        <div id="delete" className="delete-field">
          Remove Item&nbsp;&nbsp;
          <Card onClick={props.deleteClick} id="delete" className="delete-button" style={{ width: '5rem', height: '5rem' }}>
            x
          </Card>
        </div>
      </Col>
      <Card style={{ width: '28rem', height: '68rem' }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body className="card-body">
          <Card.Title className="card-title">{props.item.name}</Card.Title>
          <Card.Text>&nbsp;</Card.Text>
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
          <Modal onClose={props.onClick} show={props.show} item={props.item}>
            Message in Modal
          </Modal>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ItemCard;
