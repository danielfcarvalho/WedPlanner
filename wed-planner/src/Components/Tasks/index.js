import Task from "./Task"
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap'
import MainButton from "../Button";
import { Formik } from "formik";
import * as yup from "yup";

export default function TasksGroup() {

    const [TaskMap, setTaskMap] = useState([
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
    ])

    // Trigger Modal 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const schema = yup.object().shape({
        name: yup.string().required("Please add a task name!"),
    });      

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
                <Formik
                    validationSchema={schema}
                    onSubmit={values => {
                        console.log(values);
                        const newTask = {"title": values.name, "description": values.desc, "date": values.date, "responsible": values.resp, "progress": "not started"}
                        console.log(newTask)
                        setTaskMap([...TaskMap, newTask])
                    }}
                    initialValues={{
                        name: '',
                        resp: 'Monica',
                        date: '',
                        desc: '',
                    }}
                >
                    {({
                        handleSubmit,
                        handleChange,
                        handleBlur,
                        values,
                        touched,
                        isValid,
                        errors,
                    }) => (
                        <Form 
                            noValidate 
                            onSubmit={handleSubmit}
                        >
                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="text"
                                    name="name"
                                    placeholder="Task Name"
                                    value={values.name}
                                    onChange={handleChange}
                                    isValid={touched.name && !errors.name}
                                    isInvalid={!!errors.name}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.name}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Select 
                                className="mb-3"
                                name="resp"
                                value={values.resp}
                                onChange={handleChange}
                            >
                                <option value="Monica">Monica</option>
                                <option value="Rachel">Rachel</option>
                            </Form.Select>
                            <Form.Control
                                className="mb-3"
                                type="date"
                                name="date"
                                placeholder="Deadline" 
                                value={values.date}
                                onChange={handleChange}
                            />
                            <Form.Control
                                name="desc"
                                as="textarea"
                                placeholder="Description of the Task"
                                style={{ height: '100px' }}
                                value={values.desc}
                                onChange={handleChange}
                            />
                            <div className="row justify-content-center">
                                <Button variant="btn btn-dark" type="submit" className="mt-3 col-4">
                                    Add Task
                                </Button>
                            </div>
                        </Form>
                    )}
                    </Formik>
                </Modal.Body>
            </Modal>
        </div>
    )
}