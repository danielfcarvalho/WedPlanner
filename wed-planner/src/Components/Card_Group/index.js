import Card from "./Card";

function CardGroup() {

    const CardMap = [
        {
            name: "Guest List",
            description: "Edit and Review the Guest List for the wedding",
            icon: "FaBook",
            link: "/GuestList",
        },
        {
            name: "Budget",
            description: "Manage the expenses for the wedding",
            icon: "FaCalculator",
            link: "/Budget",
        },
        {
            name: "Services",
            description: "Manage the services employed for the wedding",
            icon: "FaUtensils",
            link: "/Services",
        },
    ]
    
    return(
        <div className="container mt-5">
            <div className="row">
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