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
        { title: 'Task 2', description: 'This is task 2', status: 'in progress', importance: 2, eisen: 3  },
        { title: 'Task 3', description: 'This is task 3', status: 'finished', importance: 3, eisen: 0  }
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
                    <ListGroup.Item key={index} id="taskItem">
                        <Row id="taskItemRow">
                            <Col lg={11}>
                                <span className="text-start">
                                    {task.title}
                                </span>
                            </Col>
                            <Col lg={1}>
                            <Button>  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                                </svg>    </Button>
                                                       </Col>
                        </Row>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
};

export default TaskList;