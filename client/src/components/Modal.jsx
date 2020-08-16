/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function MyModalWithGrid(props) {
  if (props.currentitem !== undefined) {
    const dummyObj = props.currentitem;
    const keyCount = Object.keys(dummyObj);
    const featureObj = {};

    if (keyCount < 1) {
      return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Hello
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="show-grid">
            Uh Oh! Looks like you`ve hit an error! What kind of pop-up is this?!
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-dark" onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    }

    for (let i = 0; i < props.currentitem.features.length; i += 1) {
      if (props.currentitem.features[i].value === 'null') {
        props.currentitem.features[i].value = 'No';
      } else {
        featureObj[props.currentitem.features[i].feature] = [props.currentitem.features[i].value];
      }
    }
    for (let i = 0; i < props.item.features.length; i += 1) {
      if (props.item.features[i].value === 'null') {
        props.item.features[i].value = 'No';
      } else if (featureObj[props.item.features[i].feature] === undefined) {
        featureObj[props.item.features[i].feature] = ['N/A', props.item.features[i].value];
      } else {
        featureObj[props.item.features[i].feature].push(props.item.features[i].value);
      }
    }

    return (
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <div className="modal-item-title">
              {props.currentitem.name}
            </div>
            &nbsp;and&nbsp;
            <div className="modal-item-title">
              {props.item.name}
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row id="full-modal-body" className="char-row">
              <Col id="modal-feature" className="char-col" xs={6} md={4}>
                Name
              </Col>
              <Col className="char-col" xs={6} md={4}>
                {props.currentitem.name}
              </Col>
              <Col className="char-col" xs={6} md={4}>
                {props.item.name}
              </Col>
            </Row>
            <Row className="char-row">
              <Col id="modal-feature" className="char-col" xs={6} md={4}>
                Price
              </Col>
              <Col className="char-col" xs={6} md={4}>
                $
                {props.currentitem.default_price}
              </Col>
              <Col className="char-col" xs={6} md={4}>
                $
                {props.item.default_price}
              </Col>
            </Row>
            {Object.keys(featureObj).map((key) => (
              <Row className="char-row">
                <Col id="modal-feature" className="char-col" xs={6} md={4}>
                  {key}
                </Col>
                <Col className="char-col" xs={6} md={4}>
                  {featureObj[key][0] || 'N/A'}
                </Col>
                <Col className="char-col" xs={6} md={4}>
                  {featureObj[key][1] || 'N/A'}
                </Col>
              </Row>
            ))}
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-dark" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Hello
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        Uh Oh! Looks like you`ve hit an error! What kind of pop-up is this?!
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-dark" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function MyModal(props) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button id="modal-button" variant="light" size="sm" block onClick={() => setModalShow(true)}>
        Compare Items
      </Button>

      <MyModalWithGrid
        currentitem={props.currentItem}
        show={modalShow}
        item={props.item}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default MyModal;
