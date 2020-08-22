/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
import React from 'react';
import 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemCard from './ItemCard.jsx';

const YourOutfit = (props) => {
  if (props.itemList !== null) {
    if (props.itemList[0] === null) {
      props.itemList.shift();
    }
    if (props.itemList.length > 0) {
      return (
        <div>
          <Col className="entire-outfit">
            <Row>
              <div>
                <Button id="add-to-outfit-button" variant="dark" block onClick={props.emptyClick}>
                  Add Current Item
                </Button>
              </div>
              <Container className="container">
                <Carousel>
                  {props.itemList.map((product) => (
                    <Carousel.Item>
                      <ItemCard
                        currentItem={props.currentItem}
                        image={props.itemList[0].photo}
                        onClick={props.onClick}
                        item={product}
                        deleteClick={props.deleteClick}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </Container>
            </Row>
          </Col>
        </div>
      );
    }
  }
  return (
    <div className="empty-card">
      <Card style={{ width: '28rem', height: '64rem' }}>
        <Card.Body>
          <Card.Title className="outfit-card-title">Click here to start a new Outfit!</Card.Title>
          <Card onClick={props.emptyClick} className="add-to-outfit" style={{ width: '15rem', height: '15rem' }}>
            <Card.Body>
              <Card.Title className="plus-sign">+</Card.Title>
            </Card.Body>
          </Card>
        </Card.Body>
      </Card>
    </div>

  );
};

export default YourOutfit;
