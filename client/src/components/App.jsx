/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
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
      relatedStyles: [],
      featureList: [],
    };
    this.emptyClick = this.emptyClick.bind(this);
    this.relatedDeleteClick = this.relatedDeleteClick.bind(this);
    this.outfitDeleteClick = this.outfitDeleteClick.bind(this);
    this.outfitGetter = this.outfitGetter.bind(this);
  }

  componentDidMount() {
    this.outfitGetter();

    const sortItemFunc = (itemArray) => {
      for (let i = 0; i < itemArray.length; i += 1) {
        if (i < itemArray.length - 1) {
          const currentItem = itemArray[i];
          const nextItem = itemArray[i + 1];
          if (currentItem.id > nextItem.id) {
            itemArray[i] = nextItem;
            itemArray[i + 1] = currentItem;
            return sortItemFunc(itemArray);
          }
        }
      }
      return itemArray;
    };

    const sortStyleFunc = (itemArray) => {
      for (let i = 0; i < itemArray.length; i += 1) {
        if (i < itemArray.length - 1) {
          const currentItem = itemArray[i];
          const nextItem = itemArray[i + 1];
          if (currentItem.product_id > nextItem.product_id) {
            itemArray[i] = nextItem;
            itemArray[i + 1] = currentItem;
            return sortStyleFunc(itemArray);
          }
        }
      }
      return itemArray;
    };

    axios.get('/rp/oneProductRelation')
      .then((response) => {
        this.setState({ currentItemRelations: response.data });
        if (this.state.currentItemRelations.length > 0) {
          for (let i = 0; i < this.state.currentItemRelations.length; i += 1) {
            // axios.get('/rp/relatedItems', {
            //   data: this.state.currentItemRelations[i],
            // })
            //   .then((response2) => {
            //     this.state.itemList.push(response2.data);
            //     this.state.featureList.push(response2.data.features);
            //     this.setState({ itemList: this.state.itemList });
            //     sortItemFunc(this.state.itemList);
            //   })
            //   .catch((error) => {
            //     console.log(error);
            //   });
            axios.get(`http://52.26.193.201:3000/products/${this.state.currentItemRelations[i]}`)
              .then((response2) => {
                this.state.itemList.push(response2.data);
                this.state.featureList.push(response2.data.features);
                this.setState({ itemList: this.state.itemList });
                sortItemFunc(this.state.itemList);
              })
              .catch((error) => {
                console.log(error);
              });
          }
        }

        for (let i = 0; i < this.state.currentItemRelations.length; i += 1) {
          axios.get(`http://52.26.193.201:3000/products/${this.state.currentItemRelations[i]}/styles`)
            .then((response3) => {
              if (response3.data.results[0].photos[0].thumbnail_url === null) {
                response3.data.results[0].photos[0].thumbnail_url = 'https://www.ukmodels.co.uk/wp-content/uploads/2017/11/model-agency.jpg';
                this.state.relatedStyles.push(response3.data);
              } else {
                this.state.relatedStyles.push(response3.data);
                this.setState({
                  relatedStyles: this.state.relatedStyles, currentItem: this.state.itemList[0],
                });
              }
              sortStyleFunc(this.state.relatedStyles);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  emptyClick() {
    if (this.state.outfitList === null) {
      this.state.outfitList = [];
    }
    this.state.outfitList.push(this.state.currentItem);
    this.setState({ outfitTitle: 'Your Outfit', outfitList: this.state.outfitList });
    localStorage.setItem('outfitList', JSON.stringify(this.state.outfitList));
  }

  outfitGetter() {
    this.setState({ outfitList: JSON.parse(localStorage.getItem('outfitList')) });
    this.state.outfitList = JSON.parse(localStorage.getItem('outfitList'));
    if (this.state.outfitList !== null) {
      if (this.state.outfitList.length > 0) {
        if (this.state.outfitList[0] !== null) {
          this.setState({ outfitTitle: 'Your Outfit' });
          localStorage.setItem('outfitList', JSON.stringify(this.state.outfitList));
        }
      }
      if (this.state.outfitList.length < 1) {
        this.setState({ outfitTitle: 'Add Item?' });
      }
    }
  }

  relatedDeleteClick() {
    this.state.itemList.shift();
    this.state.relatedImages.shift();
    this.setState({ itemList: this.state.itemList });
  }

  outfitDeleteClick(id) {
    for (let i = 0; i < this.state.outfitList.length; i += 1) {
      if (this.state.outfitList[i].id === id) {
        this.state.outfitList.splice(i, 1);
        localStorage.setItem('outfitList', JSON.stringify(this.state.outfitList));
        console.log('localstorage after delete: ', JSON.parse(localStorage.getItem('outfitList')));
        if (this.state.outfitList.length === 0) {
          this.setState({ outfitTitle: 'Add Item?' });
        }
        this.setState({ outfitList: JSON.parse(localStorage.getItem('outfitList')) });
        return;
      }
    }
  }

  render() {
    for (let i = 0; i < this.state.itemList.length; i += 1) {
      if (this.state.relatedStyles[i]) {
        this.state.itemList[i].photo = this.state.relatedStyles[i].results[0].photos[0].thumbnail_url;
        this.state.itemList[i].features = this.state.featureList[i];
      }
    }
    return (
      <div className="fullApp">
        <Row>
          <div>
            <h1 id="title" className="items-title">Related Items</h1>
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
