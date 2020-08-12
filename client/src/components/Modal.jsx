import React, { useState } from 'react';
import ReactBootstrap from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


function MyModalWithGrid(props) {
  if (props.item !== undefined) {
    return (
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.item.name} and Some Other Thing
        </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container className="char-container">
            <Row className="char-row">
              <Col className="char-col" xs={6} md={4}>
                Characteristic One
            </Col>
              <Col className="char-col" xs={6} md={4}>
                Current Value One
            </Col>
            <Col className="char-col" xs={6} md={4}>
                Compared Value One
            </Col>
            </Row>

            <Row className="char-row">
              <Col className="char-col" xs={6} md={4}>
                Characteristic Two
            </Col>
              <Col className="char-col" xs={6} md={4}>
                Current Value Two
            </Col>
            <Col className="char-col" xs={6} md={4}>
                Compared Value Two
            </Col>
            </Row>

            <Row className="char-row">
              <Col className="char-col" xs={6} md={4}>
                Characteristic Three
            </Col>
              <Col className="char-col" xs={6} md={4}>
                Current Value Three
            </Col>
            <Col className="char-col" xs={6} md={4}>
                Compared Value Three
            </Col>
            </Row>

          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-dark" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  } else {
    return (
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Hello
        </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row>
              <Col xs={6} md={4}>
                .col-xs-12 .col-md-8
            </Col>
              <Col xs={6} md={4}>
                .col-xs-6 .col-md-4
            </Col>
            </Row>

            <Row>
              <Col xs={6} md={4}>
                .col-xs-6 .col-md-4
            </Col>
              <Col xs={6} md={4}>
                .col-xs-6 .col-md-4
            </Col>
              <Col xs={6} md={4}>
                .col-xs-6 .col-md-4
            </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-dark" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

function DummyApp(props) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button id="modal-button" variant="light" size="sm" block onClick={() => setModalShow(true)}>
        Compare Items
      </Button>

      <MyModalWithGrid show={modalShow} item={props.item} onHide={() => setModalShow(false)} />
    </>
  );
}

export default DummyApp;