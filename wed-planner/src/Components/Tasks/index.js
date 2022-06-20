import Task from "./Task"
import React, { useState, useRef } from 'react';
import { Modal, Button, Form, ListGroup } from 'react-bootstrap'
import { FaCheckCircle } from 'react-icons/fa'
import MainButton from "../Button";
import { Formik } from "formik";
import * as yup from "yup";
import "./index.css"

export default function TasksGroup({username}) {

    const [TaskMap, setTaskMap] = useState([
        {
            id: 0,
            title: "Contact Photographer",
            description: "Call Bob and ask his availability for the day",
            date: "2022-06-30",
            responsible: "Rachel",
            progress: "not started",
            comment: {
                user: "Monica",
                message: "How is it going?",
            }
        },
        {
            id: 1,
            title: "Set table arrangements",
            description: "Don't seat PhiPhi next to Sharon",
            date: "2022-06-30",
            responsible: "Monica",
            progress: "not started",
            comment: {
                user: "",
                message: "",
            }
        },
        {
            id: 2,
            title: "Contact Florist",
            description: "Ask for White Roses",
            date: "2022-06-30",
            responsible: "Rachel",
            progress: "not started",
            comment: {
                user: "",
                message: "",
            }
            
        },
        {
            id: 3,
            title: "Set timeline for wedding day",
            description: "Entertainment - Food - Dance",
            date: "2022-06-15",
            responsible: "Rachel",
            progress: "in progress",
            comment: {
                user: "",
                message: "",
            }
            
        },
        {
            id: 4,
            title: "Buy shoes",
            description: "Go to the Shoes Store and buy shoes",
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
            title: "Print Invitations",
            description: "360 Imprimir, Aveiro",
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

    // Modal Message Updated
    const [showMessageUp, setShowMessageUp] = useState(false);
    const handleCloseMessageUp = () => setShowMessageUp(false);
    const handleShowMessageUp = () => {
        setShowMessageUp(true)
        setTimeout(() => handleCloseMessageUp, 1000)
    }

    const schema = yup.object().shape({
        name: yup.string().required("Please add a task name!"),
    });

    const schemaComment = yup.object().shape({
        message: yup.string(),
    });
    
    const showMyTasks = () => {
        setTaskMap(
            TaskMap.filter(task => task.responsible === {username}.username)
        )
    }

    const TasksRef = useRef(null);
    
    const goToTasks = () =>
      window.scrollTo({
        top: TasksRef.current.offsetTop,
        behavior: "smooth",
        // You can also assign value "auto"
        // to the behavior parameter.
      });

    return(
        <div className="mt-4">
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
            <div className="container" ref={TasksRef}>
                <div className="row">
                    <div className="col-4 not-started">
                        <div className="text-center mb-4">
                            <h3>Not Started</h3>
                        </div>
                        {
                            TaskMap
                            .filter(task => task.progress === "not started")
                            .map((task, key) => (
                                <div className="mb-4" key={key}>
                                    <Task id={task.id} title={task.title} description={task.description} date={task.date} showEditTask={handleShowEdit} showCommentTask={handleShowComment} username={username} responsible={task.responsible} comment={task.comment.message}/>
                                </div>
                            ))
                        }
                    </div>
                    <div className="col-4 mb-5 in-progress">
                        <div className="text-center mb-4"> 
                            <h3>In Progress</h3>
                        </div>
                        {
                            TaskMap
                            .filter(task => task.progress === "in progress")
                            .map((task, key) => (
                                <div className="mb-4" key={key}>
                                    <Task id={task.id} title={task.title} description={task.description} date={task.date} showEditTask={handleShowEdit} showCommentTask={handleShowComment} username={username} responsible={task.responsible} comment={task.comment.message}/>
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
                            .filter(task => task.progress === "completed")
                            .map((task, key) => (
                                <div className="mb-4" key={key}>
                                    <Task id={task.id} title={task.title} description={task.description} date={task.date} showEditTask={handleShowEdit} showCommentTask={handleShowComment} username={username} responsible={task.responsible} comment={task.comment.message}/>
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
                    <Modal.Title>{username === "Monica" ? "Edit Task" : "Task Details"}</Modal.Title>
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
                                    disabled={username === "Rachel"}
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
                                    disabled={username === "Rachel"}
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
                                    disabled={username === "Rachel"}
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
                                    disabled={username === "Rachel"}
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
                                    {username === "Monica" ? "Save" : "Change Progress"}
                                </Button>
                            </div>
                        </Form>
                    )}
                    </Formik>
                </Modal.Body>
            </Modal>

            <Modal show={showComment} onHide={handleCloseComment}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Progress / Leave Message</Modal.Title>
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
                                progress: values.state,
                                comment: {
                                    user: {username}.username,
                                    message: task.comment.message,
                                }
                            }
                         : task)
                        )
                        console.log({taskInfo})
                        handleCloseComment()

                        if (taskInfo.comment.message !== values.message && values.message !== "") {
                            setTaskMap(
                                TaskMap.map((task) => task.id === taskInfo.id ? 
                                {
                                    id: task.id,
                                    title: task.title,
                                    description: task.description,
                                    date: task.date,
                                    responsible: task.responsible,
                                    progress: values.state,
                                    comment: {
                                        user: {username}.username,
                                        message: values.message,
                                    }
                                }
                             : task)
                            )
                            handleCloseComment()
                            handleShowMessageUp()
                        }
                    }}
                    initialValues={{
                        message: "",
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
                            <ListGroup>
                                <ListGroup.Item>
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
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div>
                                        <p>Last Message:</p>
                                    </div>
                                    <div className="card mb-3">
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
                                        />
                                    </Form.Group>
                                </ListGroup.Item>
                            </ListGroup>
                            <div className="row justify-content-center mt-3">
                                <Button variant="btn btn-dark" type="submit" className="col-4">
                                    Update
                                </Button>
                            </div>
                        </Form>
                    )}
                    </Formik>
                </Modal.Body>
            </Modal>

            <Modal show={showMessageUp} onHide={handleCloseMessageUp} centered>
                <Modal.Header closeButton>
                    <div className="container text-center">
                        <Modal.Title className="">Message Updated</Modal.Title>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <div className="container col text-center">
                        <FaCheckCircle size={50} color={"green"}/ >
                    </div>
                </Modal.Body>
            </Modal>
        </div>  
    )
}