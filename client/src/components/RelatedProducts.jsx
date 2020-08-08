import React from 'react';
import ItemCard from './ItemCard.jsx';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import ReactBootstrap from 'react-bootstrap';

const MyCarousel = (props) => {
  if (props.itemList.length > 0) {
    // return props.itemList.map((retailItem) => {
      return (
          <div>
            <Container >
              <Carousel>
                <Carousel.Item>
                 <ItemCard item={props.itemList[0]}/>
                </Carousel.Item>
                <Carousel.Item>
                <ItemCard item={props.itemList[1]}/>
                </Carousel.Item>
                <Carousel.Item>
                <ItemCard item={props.itemList[2]}/>
                </Carousel.Item>
                <Carousel.Item>
                <ItemCard item={props.itemList[3]}/>
                </Carousel.Item>
                <Carousel.Item>
                <ItemCard item={props.itemList[4]}/>
                </Carousel.Item>
              </Carousel>
            </Container>
        </div>

      )
    // })
  } else {
    return <div>Hello From The Boot Screen!</div>
  }
}

export default MyCarousel;