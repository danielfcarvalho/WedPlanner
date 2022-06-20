import React from "react"
import { Button, Tooltip, OverlayTrigger } from "react-bootstrap"
import { FaExclamationCircle } from 'react-icons/fa'


export default function Task({id, title, description, date, showEditTask, showCommentTask, username, responsible, comment}) {
    return(
        <div>
            <div className="card bg-light">
                <div className="card-header">
                    <div className="row">
                        <div className="col-6">
                            <h6>{responsible}</h6>
                        </div>
                        <div className="col-6 text-end">
                            <h6>{date}</h6>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p> 
                </div>
                <div className="card-footer">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-4 p-0">
                            <OverlayTrigger
                                    delay={{ hide: 150, show: 150 }}
                                    overlay={(props) => (
                                    <Tooltip {...props}>
                                        {
                                            username === "Monica" ?
                                            "Edit task details" :
                                            "Show task details"
                                        }
                                    </Tooltip>
                                    )}
                                    placement="bottom"
                            >
                                <Button className="btn btn-dark" style={{width:"125px", verticalAlign:"middle"}} onClick={() => showEditTask(id)}>{username === "Monica" ?"Edit Task" : "Show Details"}</Button>
                            </OverlayTrigger>
                        </div>
                        <div className="col-4 p-0">
                            <OverlayTrigger
                                delay={{ hide: 150, show: 150 }}
                                overlay={(props) => (
                                <Tooltip {...props}>
                                    Change Progress, Check last message or send a new message update
                                </Tooltip>
                                )}
                                placement="bottom"
                            >
                                    <Button className="btn btn-info" style={{width:"125px", verticalAlign:"middle"}} onClick={() => showCommentTask(id)}>Status</Button>
                            </OverlayTrigger>   
                        </div>
                        <div className="col-4 p-0 text-center">
                            {comment !== "" && 
                                <p className="" style={{color: "red", fontSize: "15px", marginBottom:"0"}}><FaExclamationCircle/> New Message</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}