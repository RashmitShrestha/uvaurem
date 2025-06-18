import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function TimeInp({ refs }) {
  const [show, setShow] = useState(false);
  const [currColor, setCurrColor] = useState("#ffffff");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} style={{ backgroundColor: "black" }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-stopwatch-fill" viewBox="0 0 16 16">
          <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07A7.001 7.001 0 0 0 8 16a7 7 0 0 0 5.29-11.584l.013-.012.354-.354.353.354a.5.5 0 1 0 .707-.707l-1.414-1.415a.5.5 0 1 0-.707.707l.354.354-.354.354-.012.012A6.97 6.97 0 0 0 9 2.071V1h.5a.5.5 0 0 0 0-1zm2 5.6V9a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1 0-1h3V5.6a.5.5 0 1 1 1 0" />
        </svg>
      </Button>

      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton className="bg-dark text-white">
          <Modal.Title>Change Time</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-white">
          <Form onSubmit={refs.subF}>
            <Form.Group >

              <Form.Label>Work Time</Form.Label>
              <Container>
                <Row>
                  <Col>
                    <Form.Control type="number" placeholder="Enter minutes . . ." ref={refs.wrMin} />
                  </Col>
                  <Col>
                    <Form.Control type="number" placeholder="Enter seconds . . ." ref={refs.wrSec} />
                  </Col>
                </Row>
              </Container>
            </Form.Group>

            <Form.Group>
              <Form.Label>Break Time</Form.Label>
              <Container>
                <Row>
                  <Col>
                    <Form.Control type="number" placeholder="Enter minutes . . ." ref={refs.brMin} />
                  </Col>
                  <Col>
                    <Form.Control type="number" placeholder="Enter seconds . . ." ref={refs.brSec} />
                  </Col>
                </Row>
              </Container>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Background Color</Form.Label>

              <Container>

                <Form.Control
                  type="color"
                  id="colorInp"
                  defaultValue={currColor}
                  title="Choose your color"
                />
              </Container>

            </Form.Group>

            <hr />

            <Button variant="primary" type="submit" onClick={() => {
              setCurrColor(document.getElementById("colorInp").value);
              document.body.style.backgroundColor = document.getElementById("colorInp").value;
              Form.Control.defaultValue =  currColor;

            }

            }>
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default TimeInp;