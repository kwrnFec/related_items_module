/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
import React from 'react';
import 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import ItemCard from './ItemCard.jsx';

const MyCarousel = (props) => {
  if (props.itemList.length > 0) {
    return (
      <div>
        <Container className="container" data-interval="false">
          <Carousel>
            {props.itemList.map((product) => (
              <Carousel.Item>
                <ItemCard
                  deleteClick={props.deleteClick}
                  image={product.photo}
                  onClick={props.onClick}
                  item={product}
                  currentItem={props.currentItem}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </div>
    );
  }
  return <div>&nbsp;</div>;
};

export default MyCarousel;
