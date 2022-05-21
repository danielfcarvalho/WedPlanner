import {FaBook, FaCalculator, FaUtensils} from "react-icons/fa";

function Card({name, description, icon}) {
    return(
        <div>
            <div className="card">
                <h5 className="card-header">{name}</h5>
                <div className="card-body">
                    <div className="row">
                        <div className="col-2">
                            <h5 className="card-title">
                                {icon === "FaBook" && <FaBook size={50}/>}
                                {icon === "FaCalculator" && <FaCalculator size={50}/>}
                                {icon === "FaUtensils" && <FaUtensils size={50}/>}
                            </h5>
                        </div>
                        <div className="col-8">
                            <p className="card-text">{description}</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Card;