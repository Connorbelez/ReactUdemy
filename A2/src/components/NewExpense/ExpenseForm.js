import React from "react";  
import './ExpenseForm.css';
import { useState } from "react";

export const ExpenseForm = () => {
    // const [titleInput, setTitleInput] = useState('');
    // const [amountInput, setAmountInput] = useState('');
    // const [dateInput, setDateInput] = useState('');
    //we can use one state object instead of 3 separate state objects,
    //but I like using the 3 tbh
    
    const [userInput, setUserInput] = useState({
        titleInput: '',
        amountInput: '',
        dateInput: '',
    });

    const submitButtonHandler = (event) =>{
        console.log("Submit Button clicked");
    }

    const titleChangeHandler = (event) => {
        // userInputsetTitleInput(event.target.value);
        // console.log("titleInput: " + titleInput);
        setUserInput({
            titleInput:userInput.titleInput,
            amountInput:userInput.amountInput,
            // ...userInput,
            enteredTitle: event.target.value,
        })
    }

    const amountChangeHandler = (event) => {
        setUserInput({
            // titleInput:userInput.titleInput,
            // amountInput:userInput.amountInput,
            ...userInput,
            enteredAmount: event.target.value,
        })
    }
    const dateChangeHandler = (event) => {
        setUserInput({
            // titleInput:userInput.titleInput,
            // amountInput:userInput.amountInput,
            ...userInput,
            eneteredDate: event.target.value,
        })
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
