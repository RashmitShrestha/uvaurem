import React, { useState } from 'react';
import { ListGroup, Button, FormControl, InputGroup, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// task item, consists of task title (short string), task description (long string), task status (unstarted ,in progress, finished), and task importance (1-3)
// if a task has a description, then a special icon will be on the task item, and when clicked it opens a modal with the description and more details
// however if theres no description, then theres no clickable icon that makes a modal appear

const TaskList = () => {
    const [tasks, setTasks] = useState([
        { title: 'Task 1', description: 'This is task 1', status: 'unstarted', importance: 1 },
        { title: 'Task 2', description: 'This is task 2', status: 'in progress', importance: 2 },
        { title: 'Task 3', description: 'This is task 3', status: 'finished', importance: 3 }
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

    return (
        <div style={{ display: 'block', width: "100%", padding: 30 }}>
            <h2>Task List</h2>
            <ListGroup>
                {tasks.map((task, index) => (
                    <ListGroup.Item key={index}>
                        <Row>
                            <Col>
                                {task.title}
                            </Col>

                            <Col>
                                {task.status}
                            </Col>
                            <Col>
                                {task.importance}
                            </Col>
                        </Row>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>




    );
};

export default TaskList;