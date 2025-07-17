import { useEffect, useState } from 'react';
import { ListGroup, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const TaskList = ({ tasks, updateTask }) => {
  const [show, setShow] = useState(false);
  const [currTask, setCurrTask] = useState(null);

  const handleClose = () => {
    setShow(false);
    setCurrTask(null);
  };

  const handleShow = (taskID) => {
    const task = tasks.find((t) => t.id === taskID);
    setCurrTask({
      id: task.id,
      title: task.title,
      importance: task.importance.toString(),
      description: task.description,
      status: task.status.toString(),
    });
    setShow(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedTask = {
      ...currTask,
      title: currTask.title.trim(),
      description: currTask.description.trim(),
      importance: Number(currTask.importance),
      status: Number(currTask.status),
    };

    updateTask(updatedTask); // update parent state
    handleClose();
  };

  return (
    <div style={{ display: 'block', width: '100%', padding: 30 }}>
      <ListGroup>
        {tasks.map((task, index) => (
          <ListGroup.Item key={index} className="taskItem">
            <Row className="d-flex align-items-center justify-content-center">
              <Col xs={11} className="d-flex align-items-center justify-content-between">
                <span className="text-start">{task.title}</span>

                <span className="text-start">
                    {
                        // importance 0 = low, 1 = medium, 2 = high
                        task.importance === 0 ? (
                          <img src={`/1bar.svg`} alt="Low Importance" width="20" height="20" style={{color:"white !important", backgroundColor:"transparent"}} />
                        ) : task.importance === 1 ? (
                          <img src={`/2bar.svg`} alt="Medium Importance" width="20" height="20" />
                        ) : task.importance === 2 ? (
                          <img src={`/3bar.svg`} alt="High Importance" width="20" height="20" />
                        ) : "fucked shit bruh"
                    }
                </span>

              </Col>
              <Col xs={1} className="d-flex align-items-center justify-content-end">
                <Button
                  id={task.id}
                  onClick={() => handleShow(task.id)}
                  style={{ backgroundColor: 'transparent', border: 'none' }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-three-dots-vertical"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                  </svg>
                </Button>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="bg-dark text-white">
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-white">
          {currTask && (
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formTaskTitle">
                <Form.Label>Task Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={currTask.title}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formTaskImportance">
                <Form.Label>Importance Level</Form.Label>
                <Form.Control
                  as="select"
                  name="importance"
                  value={currTask.importance}
                  onChange={handleInputChange}
                  required
                >
                  <option value="0">Low</option>
                  <option value="1">Medium</option>
                  <option value="2">High</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formTaskDescription">
                <Form.Label>Task Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="description"
                  value={currTask.description}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group controlId="formTaskStatus">
                <Form.Label>Task Status</Form.Label>
                <Form.Control
                  as="select"
                  name="status"
                  value={currTask.status}
                  onChange={handleInputChange}
                  required
                >
                  <option value="0">Unstarted</option>
                  <option value="1">In Progress</option>
                  <option value="2">Finished</option>
                </Form.Control>
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                style={{ marginTop: '10px', borderRadius: '10px', color: 'white' }}
              >
                Save Task
              </Button>
            </Form>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default TaskList;
