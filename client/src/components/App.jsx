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
      showOne: false,
      showTwo: false
    }
    this.showModalOne = this.showModalOne.bind(this);
    this.showModalTwo = this.showModalTwo.bind(this);
  }

  showModalOne(e) {
    this.setState({
      showOne: !this.state.showOne
    });
  };

  showModalTwo(e) {
    this.setState({
      showTwo: !this.state.showTwo
    });
  };

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
            <h1 className="outfit-title" >&nbsp;&nbsp;&nbsp; Your Outfit</h1>
            <div className="your-outfit" >
              <YourOutfit show={this.state.showTwo} onClick={this.showModalTwo} itemList={this.state.itemList} />
            </div>
          </div>
        </Row>

        <div>

        </div>
      </div>

    );
  }


  componentDidMount() {
    // doesn't limit length yet
    axios.get('/data')
      .then((response) => {
        this.setState({ itemList: response.data });
      })
      .catch((err) => {
        console.log(err);
      })
  }

}
export default App;

{/* <RelatedItems itemList={this.state.itemList} />
        <Container className="p-3">
          <Jumbotron>
            <h1 className="header">Welcome To React-Bootstrap</h1>
            <ExampleToast>
              We now have Toasts
        <span role="img" aria-label="tada">
                🎉
        </span>
            </ExampleToast>
          </Jumbotron>
        </Container> */}

// const ExampleToast = ({ children }) => {
//   const [show, toggleShow] = useState(true);

//   return (
//     <>
//       {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
//       <Toast show={show} onClose={() => toggleShow(false)}>
//         <Toast.Header>
//           <strong className="mr-auto">React-Bootstrap</strong>
//         </Toast.Header>
//         <Toast.Body>{children}</Toast.Body>
//       </Toast>
//     </>
//   );
// };