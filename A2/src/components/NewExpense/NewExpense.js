import React from "react";  
import './NewExpense.css';
import { ExpenseForm } from "./ExpenseForm";

export const NewExpense = () => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        console.log("From NewExpense: " + expenseData);
    };
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )
    //onSaveExpenseData is a custom prop, it can be named anything, its pointing to the saveExpenseDataHandler function
    //we use the custom prop to pass data from the child component to the parent component
    //In this case we're using this prop to pass the function to ExpenseForm.js for it to use.
};