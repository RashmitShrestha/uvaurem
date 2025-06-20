import { useState } from 'react';
import { ListGroup, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// task item, consists of task title (short string), task description (long string), task status (unstarted ,in progress, finished), and task importance (1-3)
// if a task has a description, then a special icon will be on the task item, and when clicked it opens a modal with the description and more details
// however if theres no description, then theres no clickable icon that makes a modal appear

// eisen = based on eisenhower matrix, 0 is do, 1 is decide, 2 is delegate, and 3 is delete
const TaskList = () => {
    const [tasks, setTasks] = useState([
        { title: 'Task 1', description: 'This is task 1', status: 'unstarted', importance: 1, eisen: 0 },
        { title: 'Task 2', description: 'This is task 2', status: 'in progress', importance: 2, eisen: 3 },
        { title: 'Task 3', description: 'This is task 3', status: 'finished', importance: 3, eisen: 0 },
        { title: 'Task 4', description: 'This is task 4', status: 'unstarted', importance: 1, eisen: 1 },
        { title: 'Task 5', description: 'This is task 5', status: 'in progress', importance: 2, eisen: 2 },
        { title: 'Task 6', description: 'This is task 6', status: 'finished', importance: 3, eisen: 0 },
        { title: 'Task 7', description: 'This is task 7', status: 'unstarted', importance: 1, eisen: 1 },
        { title: 'Task 8', description: 'This is task 8', status: 'in progress', importance: 2, eisen: 2 }

    ]);

    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        if (newTask.trim()) {
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    };

    const removeTask = (index) => {
        const updatedTasks = tasks.filter((task, i) => i !== index);
        setTasks(updatedTasks);
    };

    return ( // add overflow-y: scroll to the div to make it scrollable
        <div style={{ display: 'block', width: "100%", padding: 30 }}>
            <ListGroup >
                {tasks.map((task, index) => (
                    <ListGroup.Item key={index} id="taskItem">
                        <Row className="d-flex align-items-center justify-content-center" id="taskItemRow">
                            <Col xs={11} md={11} lg={11} className="d-flex align-items-center justify-content-between">
                                <span className="text-start" style={{ float: "left" }}>
                                    {task.title}
                                </span>

                            </Col>
                            <Col xs={1} md={1} lg={1} className="d-flex align-items-center justify-content-end">
                                <Button style={{ backgroundColor: 'transparent', border: 'none' }}>  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                                </svg>
                                </Button>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
};

export default TaskList;