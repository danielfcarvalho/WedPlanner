import Card from "./Card";

function CardGroup() {

    const CardMap = [
        {
            name: "Guest List",
            description: "Edit and Review your Guest List",
            icon: "FaBook",
        },
        {
            name: "Budget",
            description: "Manage the expenses of your wedding",
            icon: "FaCalculator",
        },
        {
            name: "Services",
            description: "Manage the services you have employed for your wedding",
            icon: "FaUtensils",
        }
    ]
    
    return(
        <div className="container">
            <div className="row mt-5">
                {CardMap.map((card, key) => (
                    <div className="col-4" key={key}>
                        <Card name={card.name} description={card.description} icon={card.icon}/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CardGroup;