import Card from "./Card";

function CardGroup() {

    const CardMap = [
        {
            name: "Guest List",
            description: "Edit and Review the Guest List",
            icon: "FaBook",
            link: "/GuestList",
        },
        {
            name: "Budget",
            description: "Manage the expenses of the wedding",
            icon: "FaCalculator",
            link: "/Budget",
        },
        {
            name: "Services",
            description: "Manage the services employed for the wedding",
            icon: "FaUtensils",
            link: "/Services",
        }
    ]
    
    return(
        <div className="container">
            <div className="row mt-5">
                {CardMap.map((card, key) => (
                    <div className="col-4" key={key}>
                        <Card name={card.name} description={card.description} icon={card.icon} link={card.link}/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CardGroup;