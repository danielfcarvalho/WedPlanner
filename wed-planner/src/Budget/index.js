import BForm from '../Components/BudgetForm';
import BTable from '../Components/BudgetTable';
import React, { useState } from 'react';

export default function Budget({user}){

    const [BudgetList, setBudgetList] = useState(
        [
            {
                bill: "Wedding Dress",
                cost: "1000",
                deadline: "2022-06-30",
                checked: false,
            },
            {
                bill: "Wedding Cake",
                cost: "200",
                deadline: "2022-06-30",
                checked: false,
            },
            {
                bill: "Raul's Services",
                cost: "3500",
                deadline: "2022-06-30",
                checked: false,
            },
        ]
    )

    const updateList = (list) => {
        console.log(list)
        setBudgetList([...BudgetList, list])
    }

    return(
        <div style={{height:"100vh"}}>
            <div className="container text-center mt-5">
                <h1>Budget</h1>
                <h3><i>Manage the Expenses of the Wedding</i></h3>
            </div>
            <div className="container mt-5">
                <BForm updateList={updateList}/>
            </div>
            <div className="container mt-5 p-0" style={{backgroundColor: "white"}}>
                <BTable BudgetList={BudgetList}/>
            </div>
        </div>
    )
}   