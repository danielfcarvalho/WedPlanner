import SForm from "../Components/ServicesForm";
import STable from "../Components/ServicesTable";
import React, { useState } from 'react';

export default function Services({user}){

    const [ServicesList, setServicesList] = useState(
        [
            {
                type: "florist",
                name: "Anna's Florist Shop",
                email: "AFS@gmail.com",
                phone: 964875921,
                adress: "Rua das Flores, Neverland, 0000-000",
                link: "AFS.shop.com"
            },
            {
                type: "videographer",
                name: "Raul Videos and Photos",
                email: "Raul.Raul@gmail.com",
                phone: 12356974,
                adress: "Rua da Esquina Dr.Raul, TomorrowLand, 0000-000",
                link: "nice.shop.com"
            },
            {
                type: "makeup artist",
                name: "Violet Chachki",
                email: "booking@violetchachki.com",
                phone: 611501329,
                adress: "Rua Corrida dos Dragões, RuiPaulo, 0000-000",
                link: "violetchachki.com"
            },
            {
                type: "Catering",
                name: "Food on the go",
                email: "verygoodfood@gmail.com",
                phone: 123456789,
                adress: "Rua da Direita Avenida, Neverland, 0000-000",
                link: "verygoodfood.shop.com"
            },
        ]
    )

    const updateList = (list) => {
        console.log(list)
        setServicesList([...ServicesList, list])
    }

    return(
        <div style={{height:"100vh"}}>
            <div className="container text-center mt-5">
                <h1>Services</h1>
                <h3><i>Manage the Services employed for the wedding</i></h3>
            </div>
            <div className="container mt-5">
                <SForm updateList={updateList}/>
            </div>
            <div className="container mt-5 p-0" style={{backgroundColor: "white"}}>
                <STable ServicesList={ServicesList}/>
            </div>
        </div>
    )
}   