


export default function Task({title, description, date}) {
    return(
        <div>
            <div class="card bg-light">
                <div class="card-header">
                    <div className="row">
                        <div className="col-6">
                            <h6>{title}</h6>
                        </div>
                        <div className="col-6 text-end">
                            <h6>{date}</h6>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <p class="card-text">{description}</p>
                    <a href="#" class="btn btn-primary">Edit Task</a>
                </div>
            </div>
        </div>
    )
}