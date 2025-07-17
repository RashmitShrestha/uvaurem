import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// task item, consists of task title (short string), task notes, task status (unstarted ,in progress, finished), and task importance from eisenhower (1-3)

// eisen = based on eisenhower matrix, 0 is do, 1 is decide, 2 is delegate, and 3 is delete
const AddTask = ({addTask}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return ( // add overflow-y: scroll to the div to make it scrollable
        <>
            <Button
                style={{

                    marginLeft: "auto",
                    borderRadius: "10px",
                    color: "white"
                }}
                aria-label="Add Task"
                className='btnn'
                onClick={handleShow}
            >
                {/* SVG Plus Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    viewBox="0 0 24 24">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
            </Button>
 

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className="bg-dark text-white">
                    <Modal.Title>Add New Task</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-dark text-white">
                    <Form onSubmit={(e) => {
                        e.preventDefault();
                        addTask(e.target.title.value, Number(e.target.importance.value), e.target.description.value, Number(e.target.status.value));
                        e.target.reset(); // reset the form fields
                        handleClose();
                    }}>

                        <Form.Group controlId="formTaskTitle">
                            <Form.Label>Task Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter task title" name="title" required />
                        </Form.Group>

                        <Form.Group controlId="formTaskImportance">
                            <Form.Label>Importance Level</Form.Label>
                            <Form.Control as="select" name="importance" required>
                                <option value="0">Low</option>
                                <option value="1">Medium</option>
                                <option value="2">High</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="formTaskDescription">
                            <Form.Label>Task Description</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Enter task description" name="description" />
                        </Form.Group>

                        <Form.Group controlId="formTaskStatus">
                            <Form.Label>Task Status</Form.Label>
                            <Form.Control as="select" name="status" required>
                                <option value="0">Unstarted</option>
                                <option value="1">In Progress</option>
                                <option value="2">Finished</option>
                            </Form.Control>
                        </Form.Group>

                        <Button variant="primary" type="submit"

                            style={{
                                marginTop: "10px",
                                borderRadius: "10px",
                                color: "white"
                            }}>
                            Add Task
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>

        </>
    );
};

export default AddTask;