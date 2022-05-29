import Task from "./Task"
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap'
import MainButton from "../Button";
import { Formik } from "formik";
import * as yup from "yup";

export default function TasksGroup({username}) {

    const [TaskMap, setTaskMap] = useState([
        {
            id: 0,
            title: "Contact Photographer",
            description: "Just do it",
            date: "2022-05-31",
            responsible: "Rachel",
            progress: "not started",
            comment: {
                user: "Monica",
                message: "How is it going?",
            }
        },
        {
            id: 1,
            title: "Contact Photographer",
            description: "Just do it",
            date: "2022-05-31",
            responsible: "Monica",
            progress: "not started",
            comment: {
                user: "",
                message: "",
            }
            
        },
        {
            id: 2,
            title: "Contact Photographer",
            description: "Just do it",
            date: "2022-05-31",
            responsible: "Rachel",
            progress: "not started",
            comment: {
                user: "",
                message: "",
            }
            
        },
        {
            id: 3,
            title: "Contact Photographer",
            description: "Just do it",
            date: "2022-05-31",
            responsible: "Rachel",
            progress: "in progress",
            comment: {
                user: "",
                message: "",
            }
            
        },
        {
            id: 4,
            title: "Contact Photographer",
            description: "Just do it",
            date: "2022-05-31",
            responsible: "Monica",
            progress: "completed",
            comment: {
                user: "",
                message: "",
            }
            
        },
        {
            id: 5,
            title: "Contact Photographer",
            description: "Just do it",
            date: "2022-05-31",
            responsible: "Rachel",
            progress: "completed",
            comment: {
                user: "",
                message: "",
            }
        },
    ])

    // Trigger Modal Add Task
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Trigger Modal Edit Task
    const [taskInfo, setTaskInfo] = useState(
        {
            id: 0,
            title: "",
            description: "",
            date: "",
            responsible: "",
            progress: "",
            comment: {
                user: "",
                message: "",
            }
        }
    )
    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = (id) => {
        setShowEdit(true);
        TaskMap.map((task) => task.id === id ? setTaskInfo(
            {
                id: task.id,
                title: task.title,
                description: task.description,
                date: task.date,
                responsible: task.responsible,
                progress: task.progress,
                comment: {
                    user: task.comment.user,
                    message: task.comment.message,
                }
            }
        ) : task)
        console.log(taskInfo)
    }

    // Modal Comment Task
    const [showComment, setShowComment] = useState(false);
    const handleCloseComment = () => setShowComment(false);
    const handleShowComment = (id) => {
        setShowComment(true);
        TaskMap.map((task) => task.id === id ? setTaskInfo(
            {
                id: task.id,
                title: task.title,
                description: task.description,
                date: task.date,
                responsible: task.responsible,
                progress: task.progress,
                comment: {
                    user: task.comment.user,
                    message: task.comment.message,
                }
            }
        ) : task)
        console.log(taskInfo)
    }

    const schema = yup.object().shape({
        name: yup.string().required("Please add a task name!"),
    });

    const schemaComment = yup.object().shape({
        message: yup.string().required("Please write a comment!"),
    });
    
    const showMyTasks = () => {
        setTaskMap(
            TaskMap.filter(task => task.responsible === {username}.username)
        )
    }

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
                        {username === "Monica" ? 
                            <MainButton text="Add Task" callFunction={handleShow} /> : 
                            <MainButton text="Show My Tasks" callFunction={showMyTasks}/>
                        }
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
                                    <Task id={task.id} title={task.title} description={task.description} date={task.date} showEditTask={handleShowEdit} showCommentTask={handleShowComment}/>
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
                                    <Task id={task.id} title={task.title} description={task.description} date={task.date} showEditTask={handleShowEdit} showCommentTask={handleShowComment}/>
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
                                    <Task id={task.id} title={task.title} description={task.description} date={task.date} showEditTask={handleShowEdit} showCommentTask={handleShowComment}/>
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
                        const len = TaskMap.length;
                        const newTask = {
                            id: TaskMap[len-1].id + 1, 
                            title: values.name, 
                            description: values.desc, 
                            date: values.date, 
                            responsible: values.resp, 
                            progress: "not started",
                            comment: {
                                user: "",
                                message: "",
                            }
                        }
                        console.log(newTask)
                        setTaskMap([...TaskMap, newTask])
                        handleClose()
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
                                <Form.Label>Task Name:</Form.Label>
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
                            <Form.Group>
                                <Form.Label>Responsible:</Form.Label>
                                <Form.Select 
                                    className="mb-3"
                                    name="resp"
                                    value={values.resp}
                                    onChange={handleChange}
                                >
                                    <option value="Monica">Monica</option>
                                    <option value="Rachel">Rachel</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Deadline:</Form.Label>
                                <Form.Control
                                    className="mb-3"
                                    type="date"
                                    name="date"
                                    placeholder="Deadline" 
                                    value={values.date}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Description:</Form.Label>
                                <Form.Control
                                    name="desc"
                                    as="textarea"
                                    placeholder="Description of the Task"
                                    style={{ height: '100px' }}
                                    value={values.desc}
                                    onChange={handleChange}
                                />
                            </Form.Group>
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

            <Modal show={showEdit} onHide={handleCloseEdit}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Formik
                    validationSchema={schema}
                    onSubmit={values => {
                        console.log(taskInfo)
                        console.log(values);
                        setTaskMap(
                            TaskMap.map((task) => task.id === taskInfo.id ? 
                            {
                                id: task.id,
                                title: values.name,
                                description: values.desc,
                                date: values.date,
                                responsible: values.resp,
                                progress: values.state,
                                comment: {
                                    user: task.comment.user,
                                    message: task.comment.message,
                                }
                            }
                         : task)
                        )
                        handleCloseEdit()
                    }}
                    initialValues={{
                        name: taskInfo.title,
                        resp: taskInfo.responsible,
                        date: taskInfo.date,
                        desc: taskInfo.description,
                        state: taskInfo.progress,
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
                                <Form.Label>Task Name:</Form.Label>
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
                            <Form.Group>
                                <Form.Label>Responsible:</Form.Label>
                                <Form.Select 
                                    className="mb-3"
                                    name="resp"
                                    value={values.resp}
                                    onChange={handleChange}
                                >
                                    <option value="Monica">Monica</option>
                                    <option value="Rachel">Rachel</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Deadline:</Form.Label>
                                <Form.Control
                                    className="mb-3"
                                    type="date"
                                    name="date"
                                    placeholder="Deadline" 
                                    value={values.date}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Progress:</Form.Label>
                                <Form.Select 
                                    className="mb-3"
                                    name="state"
                                    value={values.state}
                                    onChange={handleChange}
                                >
                                    <option value="not started">not started</option>
                                    <option value="in progress">in progress</option>
                                    <option value="completed">completed</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Description:</Form.Label>
                                <Form.Control
                                    className="mb-3"
                                    name="desc"
                                    as="textarea"
                                    placeholder="Description of the Task"
                                    style={{ height: '100px' }}
                                    value={values.desc}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <div className="row justify-content-center">
                                <Button variant="btn btn-dark" type="submit" className="col-4">
                                    Edit Task
                                </Button>
                            </div>
                        </Form>
                    )}
                    </Formik>
                </Modal.Body>
            </Modal>

            <Modal show={showComment} onHide={handleCloseComment}>
                <Modal.Header closeButton>
                    <Modal.Title>Last Message</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Formik
                    validationSchema={schemaComment}
                    onSubmit={values => {
                        console.log(taskInfo)
                        console.log(values);
                        setTaskMap(
                            TaskMap.map((task) => task.id === taskInfo.id ? 
                            {
                                id: task.id,
                                title: task.title,
                                description: task.description,
                                date: task.date,
                                responsible: task.responsible,
                                progress: task.progress,
                                comment: {
                                    user: {username}.username,
                                    message: values.message,
                                }
                            }
                         : task)
                        )
                        console.log({taskInfo})
                        handleCloseComment()
                    }}
                    initialValues={{
                        message: ""
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
                            <div className="card mb-5">
                                <div className="card-header">
                                    {taskInfo.comment.user}
                                </div>
                                <div className="card-body">
                                    {taskInfo.comment.message}
                                </div>
                            </div>
                            <Form.Group className="mb-3">
                                <Form.Label>Leave your message:</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    style={{height: "100px"}}
                                    name="message"
                                    placeholder="Leave your message here"
                                    value={values.message}
                                    onChange={handleChange}
                                    isValid={touched.message && !errors.message}
                                    isInvalid={!!errors.message}
                                />
                            </Form.Group>
                            <div className="row justify-content-center">
                                <Button variant="btn btn-dark" type="submit" className="col-4">
                                    Leave Message
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