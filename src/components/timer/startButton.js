import Button from 'react-bootstrap/Button';
import { Col, Row } from 'react-bootstrap';

// onOoff = 0 time on
// onOoff = 1 time off
// timeBtn = function to start or stop the timer
const StartButton = ({ onOoff, timeBtn, skipBtn }) => {
    return (
        <Row>
            <Col xs={6} md={6} lg={6} className="d-flex align-items-center justify-content-center">
                {onOoff ? (
                    <Button  className='btnn'style={{ fontSize: "20px", backgroundColor: "#3636368c !important", color: "white", border: "none" }} onClick={timeBtn} >Stop</Button>
                ) :
                    <Button  className='btnn' style={{ fontSize: "20px", backgroundColor: "#6666668c !important", color: "white", border: "none" }} onClick={timeBtn} >Start</Button>
                }
            </Col>
            <Col xs={6} md={6} lg={6} className="d-flex align-items-center justify-content-center">
                <Button style={{ fontSize: "20px", backgroundColor: "#3636368c", color: "white", border: "none" }} onClick={skipBtn}  className='btnn'>Skip</Button>

            </Col>
        </Row>

    );
}


export default StartButton;