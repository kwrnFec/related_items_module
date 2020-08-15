/* eslint-disable guard-for-in */
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
      outfitTitle: 'Add Item?',
      currentItemRelations: [],
      relatedImages: [],
      featureList: [],
    };
    this.emptyClick = this.emptyClick.bind(this);
    this.relatedDeleteClick = this.relatedDeleteClick.bind(this);
    this.outfitDeleteClick = this.outfitDeleteClick.bind(this);
  }

  componentDidMount() {
    axios.get('/cart')
      .then((response) => {
        this.setState({ outfitList: response.data });
        console.log(this.state.outfitList);
      })
      .catch((err) => {
        console.log(err);
      });

    axios.get('/oneProductRelation')
      .then((response) => {
        this.setState({ currentItemRelations: response.data });
        for (let i = 0; i < this.state.currentItemRelations.length; i += 1) {
          axios.get(`http://18.224.200.47/products/${this.state.currentItemRelations[i]}`)
            .then((response2) => {
              this.state.itemList.push(response2.data);
              this.state.featureList.push(response2.data.features);
              this.setState({ itemList: this.state.itemList });
            });
        }
        for (let i = 0; i < this.state.currentItemRelations.length; i += 1) {
          axios.get(`http://18.224.200.47/products/${this.state.currentItemRelations[i]}/styles`)
            .then((response3) => {
              if (response3.data.results[0].photos[0].url === null) {
                this.state.relatedImages.push('https://www.ukmodels.co.uk/wp-content/uploads/2017/11/model-agency.jpg');
              } else {
                this.state.relatedImages.push(response3.data.results[0].photos[0].url);
                this.setState({
                  relatedImages: this.state.relatedImages, currentItem: this.state.itemList[0],
                });
              }
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  emptyClick() {
    const { currentItem } = this.state;
    this.state.outfitList.push(this.state.currentItem);
    this.setState({ outfitTitle: 'Your Outfit' });
    axios.post('/cart', { data: currentItem })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  relatedDeleteClick() {
    this.state.itemList.shift();
    this.state.relatedImages.shift();
    this.setState({ itemList: this.state.itemList });
  }

  outfitDeleteClick() {
    const relatedId = this.state.outfitList[0].id;
    axios.patch('/cart', { data: relatedId })
      .then((response) => {
        console.log(response.data);
      });
    this.state.outfitList.shift();
    if (this.state.outfitList.length < 1) {
      this.setState({ outfitTitle: 'Add Item?' });
    }
    this.setState({ outfitList: this.state.outfitList });
  }

  render() {
    for (let i = 0; i < this.state.itemList.length; i += 1) {
      this.state.itemList[i].photo = this.state.relatedImages[i];
      this.state.itemList[i].features = this.state.featureList[i];
    }
    return (
      <div className="fullApp">
        <Row>
          <div>
            <h1 className="items-title">&nbsp;&nbsp; Related Items</h1>
            <div className="related-products">
              <RelatedProducts
                currentItem={this.state.currentItem}
                itemList={this.state.itemList}
                relatedIds={this.state.currentItemRelations}
                deleteClick={this.relatedDeleteClick}
              />
            </div>
          </div>
          <div className="outfit-plus-title">
            <h1 className="outfit-title">
              &nbsp;&nbsp;&nbsp;
              {this.state.outfitTitle}
            </h1>
            <div className="your-outfit">
              <YourOutfit
                currentItem={this.state.currentItem}
                imageList={this.state.relatedImages}
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
