import React from 'react';
import ItemCard from './ItemCard.jsx';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import ReactBootstrap from 'react-bootstrap';
import Modal from "./Modal.jsx";
import axios from 'axios';

const MyCarousel = (props) => {
  if (props.itemList.length > 0) {
      return (
          <div>
            <Container className="container" data-interval="false">
              <Carousel >
                {props.itemList.map((product) => {
                  return (
                    <Carousel.Item>
                  <ItemCard image={props.imageList[product.id - 1]} onClick={props.onClick} item={product}/>
                 </Carousel.Item>
                    )
                })}
              </Carousel>
            </Container>
        </div>
      )
  } else {
    return <div>Hello From The Boot Screen!</div>
  }
}

export default MyCarousel;