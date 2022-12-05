import React from "react";  
import './ExpenseForm.css';
import { useState } from "react";

export const ExpenseForm = () => {
    const [titleInput, setTitleInput] = useState('');
    const [amountInput, setAmountInput] = useState('');
    const [dateInput, setDateInput] = useState('');

    //we can use one state object instead of 3 separate state objects,
    //but I like using the 3 tbh
    // const [userInput, setUserInput] = useState({
    //     titleInput: '',
    //     amountInput: '',
    //     dateInput: '',
    // });

    const titleChangeHandler = (event) => {
        // setTitleInput(event.target.value);
        // console.log(titleInput);

        setTitleInput((prevState) => {
            console.log("prevState: " + prevState);
            console.log("CurState: " + event.target.value);
            return event.target.value;
        });
        console.log("Title: " + titleInput);
    }
    // const titleChangeHandler = (event) => {
    //     // userInputsetTitleInput(event.target.value);
    //     // console.log("titleInput: " + titleInput);
    //     setUserInput({
    //         titleInput:userInput.titleInput,
    //         amountInput:userInput.amountInput,
    //         // ...userInput,
    //         enteredTitle: event.target.value,
    //     })
    // }

    const amountChangeHandler = (event) => {
        // setAmountInput(event.target.value);
        // console.log("amountInput: " + amountInput);
        setAmountInput((prevState) => {
            console.log("prevState: " + prevState);
            console.log("CurState: " + event.target.value);
            return event.target.value;
        });

        console.log("Amount: " + amountInput)
    }
    // const amountChangeHandler = (event) => {
    //     //This guarentees that the state is updated correctly, on the latest state snapshot
    //     setUserInput((prevState) => {
    //         return {...prevState, enteredAmount: event.target.value};
    //     });
    // }

    const dateChangeHandler = (event) => {
        setDateInput(event.target.value);
        console.log("dateInput: " + dateInput);
    }
    // const dateChangeHandler = (event) => {
    //     setUserInput({
    //         // titleInput:userInput.titleInput,
    //         // amountInput:userInput.amountInput,
    //         ...userInput,
    //         eneteredDate: event.target.value,
    //     })
    // }

    const submitHandler = (event) => {
        event.preventDefault(); //stop page reload and request being sent to server
        
        const expenseData = {
            title: titleInput,
            amount: amountInput,
            date: new Date(dateInput),
        };

        console.log(expenseData);
        console.log("Submit button clicked 1 ");
        
        setTitleInput('');
        setAmountInput('');
        setDateInput('');
        
    }

    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">

                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={titleInput} onChange={titleChangeHandler}/>
                </div>
            
                <div className="new-expense__control">  
                    <label>Amount</label>

                    {/*value is needed for 2 way binding, so that the input field is updated when the state is updated*/}

                    <input type="number" min="0.01" step="0.01" value={amountInput} onChange={amountChangeHandler}/>
                </div>

                <div className="new-expense__control">  
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={dateInput} onChange={dateChangeHandler}/>
                </div>

                <div className="new-expense__control">
                    <button type="submit">Add Expense</button>
                </div>

            </div>
        </form>
    )

}
