import Task from "./Task"
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap'
import MainButton from "../Button";

export default function TasksGroup() {

    const TaskMap = [
        {
            title: "Contact Photographer",
            description: "Just do it",
            date: "31-05-2022",
            responsible: "Rachel",
            progress: "not started"
        },
        {
            title: "Contact Photographer",
            description: "Just do it",
            date: "31-05-2022",
            responsible: "Rachel",
            progress: "not started"
            
        },
        {
            title: "Contact Photographer",
            description: "Just do it",
            date: "31-05-2022",
            responsible: "Rachel",
            progress: "not started"
            
        },
        {
            title: "Contact Photographer",
            description: "Just do it",
            date: "31-05-2022",
            responsible: "Rachel",
            progress: "in progress"
            
        },
        {
            title: "Contact Photographer",
            description: "Just do it",
            date: "31-05-2022",
            responsible: "Rachel",
            progress: "completed"
            
        },
        {
            title: "Contact Photographer",
            description: "Just do it",
            date: "31-05-2022",
            responsible: "Rachel",
            progress: "completed"
            
        },
    ]


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return(
        <div className="mt-5">
            <div className="container mb-5">
                <hr className=""/>
            </div>
            <div className="container mb-5">
                <div className="row justify-content-center mb-4">
                    <div className="col-4">
                        <h1 className="text-center">To Do List</h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="d-flex justify-content-center col-8">
                        <MainButton text="Add Task" callFunction={handleShow}/>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="text-center mb-4">
                            <h3>Not Started</h3>
                        </div>
                        {
                            TaskMap
                            .filter(task => task.progress == "not started")
                            .map((task, key) => (
                                <div className="mb-4" key={key}>
                                    <Task title={task.title} description={task.description} date={task.date}/>
                                </div>
                            ))
                        }
                    </div>
                    <div className="col-4 mb-5">
                        <div className="text-center mb-4"> 
                            <h3>In Progress</h3>
                        </div>
                        {
                            TaskMap
                            .filter(task => task.progress == "in progress")
                            .map((task, key) => (
                                <div className="mb-4" key={key}>
                                    <Task title={task.title} description={task.description} date={task.date}/>
                                </div>
                            ))
                        }
                    </div>
                    <div className="col-4 mb-5">
                        <div className="text-center mb-4"> 
                            <h3>Completed</h3>
                        </div>
                        {
                            TaskMap
                            .filter(task => task.progress == "completed")
                            .map((task, key) => (
                                <div className="mb-4" key={key}>
                                    <Task title={task.title} description={task.description} date={task.date}/>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Control type="text" placeholder="Task Name" className="mb-3"/>
                        <Form.Select className="mb-3">
                            <option>Monica</option>
                            <option>Rachel</option>
                        </Form.Select>
                        <Form.Control type="date" placeholder="Deadline" className="mb-3"/>
                        <Form.Control
                            as="textarea"
                            placeholder="Description of the Task"
                            style={{ height: '100px' }}
                        />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}