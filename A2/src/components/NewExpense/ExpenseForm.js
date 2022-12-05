import React from "react";  
import './ExpenseForm.css';
import { useState } from "react";

export const ExpenseForm = () => {
    const [titleInput, setTitleInput] = useState('');
    const [amountInput, setAmountInput] = useState('');
    const [dateInput, setDateInput] = useState('');

    const submitButtonHandler = (event) =>{
        console.log("Submit Button clicked");
    }
    const titleChangeHandler = (event) => {
        setTitleInput(event.target.value);
        console.log("titleInput: " + titleInput);
    }
    const amountChangeHandler = (event) => {
        setAmountInput(event.target.value);
        console.log("amountInput: " + amountInput);
    }
    const dateChangeHandler = (event) => {
        setDateInput(event.target.value);
        console.log("dateInput: " + dateInput);
    }

    return(
        <form>
            <div className="new-expense__controls">

                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler}/>
                </div>

                <div className="new-expense__control">  
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>

                <div className="new-expense__control">  
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
                </div>

                <div className="new-expense__control">
                    <button type="submit" onClick={submitButtonHandler}>Add Expense</button>
                </div>

            </div>
        </form>
    )

}
