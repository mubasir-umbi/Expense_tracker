import React from "react";
import ExpenceItem from "./ExpenceItem";

import './ExpensesList.css'

const ExpensesList = props => {
    
    if(props.item.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses</h2>
    }

    return (
        <ul className="expenses-list">
          {props.item.map(item => (  
            <ExpenceItem
             key={item.id}
             title={item.title}
             amount={item.amount}
             date={item.date}
            />
          )) 
        }     
    </ul>
    )
}

export default ExpensesList