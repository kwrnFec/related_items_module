import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import bodyParser from 'body-parser';
import RelatedItems from './RelatedItems.jsx';
import ReactBootstrap from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      itemList: []
    }
  }


  render() {
    return (
      <div>Related Items
        <RelatedItems itemList={this.state.itemList} />
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