import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import bodyParser from 'body-parser';
import RelatedProducts from './RelatedProducts.jsx';
import ReactBootstrap from 'react-bootstrap';
import Modal from "./Modal.jsx";
import YourOutfit from "./YourOutfit.jsx";


// import 'bootstrap/dist/css/bootstrap.min.css';

import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      itemList: [],
      outfitList: [],
      outfitTitle: 'Add Item'
    }
    this.emptyClick = this.emptyClick.bind(this);
  }

  emptyClick() {
    this.setState({ outfitList: this.state.itemList, outfitTitle: 'Your Outfit' })
  }

  render() {
    return (
      <div>
        <Row>

          <div>
            <h1 className="items-title">&nbsp;&nbsp; Related Items</h1>
            <div className="related-products">
              <RelatedProducts show={this.state.showOne} onClick={this.showModalOne} itemList={this.state.itemList} />
            </div>
          </div>
          <div>
            <h1 className="outfit-title" >&nbsp;&nbsp;&nbsp; {this.state.outfitTitle}</h1>
            <div className="your-outfit" >
              <YourOutfit emptyClick={this.emptyClick} itemList={this.state.outfitList} />
            </div>
          </div>
        </Row>

        <div>

        </div>
      </div>

    );
  }


  componentDidMount() {
    axios.get('/data')
      .then((response) => {
        this.setState({ itemList: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
    axios.get('/cart')
      .then((response) => {
        this.setState({ outfitList: response.data });
      })
      .catch((err) => {
        console.log(err);
      })
  }

}
export default App;