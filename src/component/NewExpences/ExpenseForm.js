import React, {useState} from "react";

import "./ExpenseForm.css"

const ExpenseForm = (props) => {
    const [enteredTitle, setnteredTitle] = useState("")
    const [enteredAmount, setnteredAmount] = useState("")
    const [enteredDate, setnteredDate] = useState("")

    const titleChangeHandler = event => setnteredTitle(event.target.value)
    const amountChangeHandler = event => setnteredAmount(event.target.value)
    const dateChangeHandler = event => setnteredDate(event.target.value)

    const submitHandler = event => {
        event.preventDefault()
        
        const expenseData ={
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenceData(expenseData)
        setnteredTitle('')
        setnteredAmount('')
        setnteredDate('')
        
    }

    return ( 
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input 
                     type={"text"} 
                     onChange={titleChangeHandler}
                     value={enteredTitle}
                    />
                </div>
                <div className="new-expense__control">
                    <label>amount</label>
                    <input 
                     type={"number"} 
                     min="0.01" 
                     step={"0.01"} 
                     onChange={amountChangeHandler}
                     value={enteredAmount}
                    />
                </div>
                <div className="new-expense__control">
                    <label>date</label>
                    <input 
                     type={"date"} 
                     min="2019-01-01" 
                     max={"2022-12-31"} 
                     onChange={dateChangeHandler}
                     value={enteredDate}
                    />
                </div>
                <div className="new-expense__actions">
                    <button 
                      onClick={props.onCancel} 
                      type="button">
                        Cancel
                    </button>
                    <button type="submit"> Add Expense </button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm