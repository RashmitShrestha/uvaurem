import './App.css';
import Timer from './components/timer/Timer.js';
import Navb from './components/navbar/Navb.js';
import TaskList from './components/tasklist/Tasklist.js';
import Spotify from './components/islands/spotify.js';
import { Row, Col, Container } from 'react-bootstrap';
import { useState, useRef } from 'react';

//react bootstrap form input

// amount of work and break is in the Navb file, inside another js file linked to, but the id name is BrMin, BrSec, WrMin, WrSec
// include way to get the inputs from inside the Navb file and pass them to the Timer function in this file

// advanced pomodoro timer 
// 1500 secs = 25 mins
// 300 secs = 5 mins
function App() {
  const [wrkTi, setWrkT] = useState(1500);
  const [brkTi, setBrkT] = useState(300);
  const [phase, setPhase] = useState(0);

  const wrMin = useRef();
  const wrSec = useRef();
  const brMin = useRef();
  const brSec = useRef();
  const currPhase = useRef(); // 0 is work time, 1 is break time 

  const submFunc = (e) => {
    setWrkT(Number((wrMin.current.value * 60) + wrSec.current.value));
    setBrkT(Number((brMin.current.value * 60) + brSec.current.value));
    e.preventDefault();
  }

  return (
    <div className="App" >
      <section>
        <Navb refs={{
          wrMin: wrMin,
          wrSec: wrSec,
          brMin: brMin,
          brSec: brSec,
          subF: submFunc
        }} />

        <Container style={{ marginBottom: "10px" }} className="mt-3">
          <Row className="d-flex gap-2 mb-2" height="100vh"  >
            <Col className="mb-sm-4">
              <div className="islands">
                <Timer wrkT={wrkTi} brkT={brkTi} wOB={currPhase} />
              </div>
            </Col>

            <Col >
              <div className="islands">
                <h1> Task List</h1>

                <TaskList />
              </div>
            </Col>
          </Row>

          <Row className="d-flex gap-2 mb-2">
            <Col className="mb-sm-4">
              <div className="islands">
                <Spotify />
              </div>
            </Col>
            <Col md={7}>
              <div className="islands">
                <h1> Motivation Quotes</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default App;
