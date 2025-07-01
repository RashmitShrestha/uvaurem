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
  const [currWrMin, setWrMin] = useState();
  const [currWrSec, setWrSec] = useState();
  const [currBrMin, setBrMin] = useState();
  const [currBrSec, setBrSec] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="btnn">
        <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" color="white">
          <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="10" fill="none" />
        </svg>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="bg-dark text-white">
          <Modal.Title>Change Time</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-white">
          <Form onSubmit={refs.subF}>

            <Form.Group>
              <Form.Label>Work Time</Form.Label>
              <Container>
                <Row>
                  <Col>
                    <Form.Control defaultValue={currWrMin ? currWrMin : 25} type="number" placeholder="Enter minutes . . ." ref={refs.wrMin} id="wrMin" />
                  </Col>
                  <Col>
                    <Form.Control defaultValue={currWrSec ? currWrSec : ""} type="number" placeholder="Enter seconds . . ." ref={refs.wrSec} id="wrSec" />
                  </Col>
                </Row>
              </Container>
            </Form.Group>

            <Form.Group>
              <Form.Label>Break Time</Form.Label>
              <Container>
                <Row>
                  <Col>
                    <Form.Control defaultValue={currBrMin ? currBrMin : 5} type="number" placeholder="Enter minutes . . ." ref={refs.brMin} id="brMin" />
                  </Col>
                  <Col>
                    <Form.Control defaultValue={currBrSec ? currBrSec : ""} type="number" placeholder="Enter seconds . . ." ref={refs.brSec} id="brSec" />
                  </Col>
                </Row>
              </Container>
            </Form.Group>

            <Form.Group>
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
              setWrMin(document.getElementById("wrMin").value);
              setWrSec(document.getElementById("wrSec").value);
              setBrMin(document.getElementById("brMin").value);
              setBrSec(document.getElementById("brSec").value);

              document.body.style.backgroundColor = document.getElementById("colorInp").value;
              Form.Control.defaultValue = currColor;
            }}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default TimeInp;