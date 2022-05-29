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
                type: "florist",
                name: "Anna's Florist Shop",
                email: "AFS@gmail.com",
                phone: 964875921,
                adress: "Rua das Flores, Neverland, 0000-000",
                link: "AFS.shop.com"
            },
            {
                type: "florist",
                name: "Anna's Florist Shop",
                email: "AFS@gmail.com",
                phone: 964875921,
                adress: "Rua das Flores, Neverland, 0000-000",
                link: "AFS.shop.com"
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
                <h3><i>Manage the Services employed for the wedding</i></h3> :
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