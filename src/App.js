import './App.css';
import Timer from './components/timer/Timer.js';
import Navb from './components/navbar/Navb.js';
import TaskList from './components/tasklist/Tasklist.js';
import{Row, Col, Container} from 'react-bootstrap';
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

  const wrMin = useRef();
  const wrSec = useRef();
  const brMin = useRef();
  const brSec = useRef();

  const submFunc = (e) => {
    setWrkT(Number((wrMin.current.value * 60) + wrSec.current.value) );
    setBrkT(Number((brMin.current.value * 60) + brSec.current.value ));
    e.preventDefault(); 
  }

  return (
    <div className="App">
      <section>
        <Navb refs={{
          wrMin: wrMin,
          wrSec: wrSec,
          brMin: brMin,
          brSec: brSec,
          subF : submFunc
          
        }}/>



        <Container >

          <Row height="100vh">
            <Col md={8} className="mx-auto ">
            <div className="islands">
            <Timer wrkT={wrkTi} brkT={brkTi} wOB={true} />

            </div>

            </Col>

            <Col md={4} className="mx-auto  font-white">
            <div className="islands">
              <h3>Task List</h3>
              <TaskList />

            </div>
            </Col>

          </Row>
        </Container>
        {/* <iframe style={{backgroundColor: "blue", padding: "5px", maxWidth:"1000"}} src="https://open.spotify.com/embed/playlist/4gKYOkQ58e3bnMttLS2p3X?utm_source=generator" width="auto" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> */}
      </section>
    </div>
  );
}

export default App;
