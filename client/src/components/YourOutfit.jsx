import React from 'react';
import ItemCard from './ItemCard.jsx';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import ReactBootstrap from 'react-bootstrap';
import Modal from "./Modal.jsx";
import Card from 'react-bootstrap/Card';

const YourOutfit = (props) => {
  if (props.itemList.length > 0) {
    return (
      <div>
        <Container className="container">
          <Carousel >
            {props.itemList.map((product) => {
              return (
                <Carousel.Item>
                  <ItemCard onClick={props.onClick} item={product} />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Container>
        <div>&nbsp;</div>
        <div>
          <Button id="add-to-outfit-button" variant="dark" size="sm" block onClick={props.emptyClick}>
            Add Current Item
          </Button>
        </div>
      </div>
    )
    // })
  } else {
    return (
      <div>
        <Card style={{ width: '27rem', height: '42rem' }}>
          <Card.Body >
            <Card.Title className="outfit-card-title">Click here to start a new Outfit!</Card.Title>
            <Card onClick={props.emptyClick} className="add-to-outfit" style={{ width: '15rem', height: '15rem' }}>
              <Card.Body  >
                <Card.Title className="plus-sign">+</Card.Title>
              </Card.Body>
            </Card>
          </Card.Body>
        </Card>
      </div>

    )
  }
}


export default YourOutfit;