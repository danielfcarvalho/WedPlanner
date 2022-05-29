import MyForm from "../Components/MyForm";
import GLTable from "../Components/GuestListTable";
import React, { useState } from 'react';

export default function GuestList({user}){

    const [GuestList, setGuestList] = useState(
        [
            {
                firstName: "Artur",
                lastName: "Correia",
                email: "art.afo@ua.pt",
                phone: "930577403",
                street: "In a place far far away",
                postal: "0000-000",
            },
            {
                firstName: "Artur",
                lastName: "Correia",
                email: "art.afo@ua.pt",
                phone: "930577403",
                street: "In a place far far away",
                postal: "0000-000",
            },
            {
                firstName: "Artur",
                lastName: "Correia",
                email: "art.afo@ua.pt",
                phone: "930577403",
                street: "In a place far far away",
                postal: "0000-000",
            },
        ]
    )

    const updateList = (list) => {
        console.log(list)
        setGuestList([...GuestList, list])
    }

    return(
        <div style={{height:"100vh"}}>
            <div className="container text-center mt-5">
                <h1>Guest List</h1>
                {user === "Monica" ? 
                    <h3><i>Edit and Review the Guest List</i></h3> :
                    <h3><i>Review the Guest List</i></h3>
                }
            </div>
            {user === "Monica" && <div className="container mt-5">
                <MyForm updateList={updateList}/>
            </div>}
            <div className="container mt-5 p-0" style={{backgroundColor: "white"}}>
                <GLTable GuestList={GuestList}/>
            </div>
        </div>
    )
}   