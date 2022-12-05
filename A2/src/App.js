// import { ExpenseItem } from "./components/ExpenseItem";
import { ExpenseItems } from "./components/ExpensesComps/ExpenseItems";
import React from "react";
import { NewExpense } from "./components/NewExpense/NewExpense";

const App = () =>
{
  const expenses = [
    {
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 0, 28),
    },
    { title: "Toilet Paper", amount: 94.67, date: new Date(2021, 0, 28) },
    { title: "New TV", amount: 294.67, date: new Date(2021, 0, 28) },
    { title: "New Desk (Wooden)", amount: 294.67, date: new Date(2021, 0, 28) },
  ];

  //passing props to ExpenseItem component
  //Alternative way to create react component
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(ExpenseItems, { expenses: expenses })
  // );

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <ExpenseItems expenses={expenses}/>
      {/* <NewExpense/> */}
    </div>
  );
}

export default App;
