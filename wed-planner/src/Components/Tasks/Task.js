import React from "react"
import {Button} from "react-bootstrap"


export default function Task({id, title, description, date, showEditTask}) {
    return(
        <div>
            <div className="card bg-light">
                <div className="card-header">
                    <div className="row">
                        <div className="col-6">
                            <h6>{title}</h6>
                        </div>
                        <div className="col-6 text-end">
                            <h6>{date}</h6>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <p className="card-text">{description}</p>
                    <Button className="btn btn-dark" onClick={() => showEditTask(id)}>Edit Task</Button>
                </div>
            </div>
        </div>
    )
}