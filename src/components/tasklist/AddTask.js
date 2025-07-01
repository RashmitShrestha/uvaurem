import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// task item, consists of task title (short string), task description (long string), task status (unstarted ,in progress, finished), and task importance (1-3)
// if a task has a description, then a special icon will be on the task item, and when clicked it opens a modal with the description and more details
// however if theres no description, then theres no clickable icon that makes a modal appear

// eisen = based on eisenhower matrix, 0 is do, 1 is decide, 2 is delegate, and 3 is delete
const AddTask = () => {
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
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    );
};

export default AddTask;