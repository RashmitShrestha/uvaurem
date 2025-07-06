import './App.css';
import Timer from './components/timer/Timer.js';
import Navb from './components/navbar/Navb.js';
import TaskList from './components/tasklist/Tasklist.js';
import Spotify from './components/islands/spotify.js';
import AddTask from './components/tasklist/AddTask.js';
import { Row, Col, Container } from 'react-bootstrap';
import { useState, useRef } from 'react';

import { taskClass } from './toolkit/helper.js';

function App() {
  const [wrkTi, setWrkT] = useState(1500);
  const [brkTi, setBrkT] = useState(300);
  const [phase, setPhase] = useState(1);
  const [taskList, setTaskList] = useState([]);

  const wrMin = useRef();
  const wrSec = useRef();
  const brMin = useRef();
  const brSec = useRef();
  const currPhase = useRef();
  currPhase.current = phase;

  const addTaskFunc = (title, importance, description = "", status = 0) => {
    let task = new taskClass(title, importance, description, status);
    setTaskList([...taskList, task]);
    console.log(`Task added: ${task.toString()}`);
  };

  const updateTaskFunc = (updatedTask) => {
    const updatedList = taskList.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTaskList(updatedList);
  };

  const submFunc = (e) => {
    e.preventDefault();
    if (
      (wrMin.current.value === "" && wrSec.current.value === "") ||
      (brMin.current.value === "" && brSec.current.value === "")
    ) {
      alert("Please fill in all fields");
    } else {
      setWrkT(Number(wrMin.current.value * 60) + Number(wrSec.current.value));
      setBrkT(Number(brMin.current.value * 60) + Number(brSec.current.value));
    }
  };

  return (
    <div className="App">
      <section>
        <Navb
          refs={{
            wrMin: wrMin,
            wrSec: wrSec,
            brMin: brMin,
            brSec: brSec,
            subF: submFunc,
          }}
        />

        <Container className="mt-3" style={{ marginBottom: '10px' }}>
          <Row className="d-flex gap-2 mb-2">
            <Col className="mb-sm-4">
              <div className="islands">
                <Timer wrkT={wrkTi} brkT={brkTi} wOB={phase} />
              </div>
            </Col>

            <Col>
              <div className="islands">
                <div
                  style={{
                    width: '100%',
                    height: '10vh',
                    background: '#18181855',
                    top: '0',
                    zIndex: '1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0.5rem 2rem',
                    position: 'sticky',
                  }}
                >
                  <h1 style={{ margin: 0, flex: 1, textAlign: 'center' }}>Task List</h1>
                  <AddTask addTask={addTaskFunc} />
                </div>

                <div style={{ width: '100%' }}>
                  <TaskList tasks={taskList} updateTask={updateTaskFunc} />
                </div>
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
                <h1>Motivation Quotes</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default App;
