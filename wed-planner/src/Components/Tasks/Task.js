


export default function Task({title, description, date}) {
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
                    <a href="#" className="btn btn-primary">Edit Task</a>
                </div>
            </div>
        </div>
    )
}