/* eslint-disable no-console */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
import React from 'react';
import 'react-dom';
import axios from 'axios';
import 'body-parser';
import 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import RelatedProducts from './RelatedProducts.jsx';
import YourOutfit from './YourOutfit.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      itemList: [],
      currentItem: {},
      outfitList: [],
      outfitTitle: 'Add Item',
      currentPhoto: '',
      photoList: [],
      currentItemRelations: [],
      relatedImages: [],
    };
    this.emptyClick = this.emptyClick.bind(this);
    this.relatedDeleteClick = this.relatedDeleteClick.bind(this);
    this.outfitDeleteClick = this.outfitDeleteClick.bind(this);
  }

  componentDidMount() {
    axios.get('/data')
      .then((response) => {
        this.setState({ itemList: response.data, currentItem: response.data[0] });
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
      });

    axios.get('/oneProductRelation')
      .then((response) => {
        this.setState({ currentItemRelations: response.data });
        console.log(this.state);
      })
      .catch((err) => {
        console.log(err);
      });

    axios.get('/styles')
      .then((response) => {
        response.data.results.map((style) => {
          this.state.photoList.push(style.photos[0].url);
          return this.state;
        });
        this.setState({
          currentPhoto: response.data.results[0].photos[0].url,
        });
      });
  }

  emptyClick() {
    this.state.outfitList.push(this.state.currentItem);
    this.setState({ outfitTitle: 'Your Outfit' });
  }

  relatedDeleteClick() {
    delete this.state.itemList[0];
    this.state.itemList.shift();
    this.setState({ itemList: this.state.itemList });
  }

  outfitDeleteClick() {
    delete this.state.outfitList[0];
    console.log(this.state.outfitList);
    this.state.outfitList.shift();
    if (this.state.outfitList.length < 1) {
      this.setState({ outfitTitle: 'Add Item' });
    }
    this.setState({ outfitList: this.state.outfitList });
  }

  render() {
    return (
      <div className="fullApp">
        <Row>
          <div>
            <h1 className="items-title">&nbsp;&nbsp; Related Items</h1>
            <div className="related-products">
              <RelatedProducts
                imageList={this.state.photoList}
                itemList={this.state.itemList}
                relatedIds={this.state.currentItemRelations}
                deleteClick={this.relatedDeleteClick}
              />
            </div>
          </div>
          <div>
            <h1 className="outfit-title">
              &nbsp;&nbsp;&nbsp;
              {this.state.outfitTitle}
            </h1>
            <div className="your-outfit">
              <YourOutfit
                imageList={this.state.photoList}
                emptyClick={this.emptyClick}
                itemList={this.state.outfitList}
                deleteClick={this.outfitDeleteClick}
              />
            </div>
          </div>
        </Row>
      </div>
    );
  }
}

export default App;
