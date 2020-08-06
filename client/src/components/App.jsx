import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import bodyParser from 'body-parser';
import RelatedItems from './RelatedItems.jsx';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';

const ExampleToast = ({ children }) => {
  const [show, toggleShow] = useState(true);

  return (
    <>
      {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">React-Bootstrap</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </>
  );
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <RelatedItems />
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
        </Container>
        </div>
    );
  }
}

export default App;