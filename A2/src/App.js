// import { ExpenseItem } from "./components/ExpenseItem";
import { ExpenseItems } from "./components/ExpensesComps/ExpenseItems";
import React from "react";

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

  return (
    <div>
      <h2>Let's get started!</h2>
      <p>testest</p>
      <ExpenseItems expenses={expenses}/>

    </div>
  );
}

export default App;
