// import { ExpenseItem } from "./components/ExpenseItem";
import { ExpenseItems } from "./components/ExpenseItems";

function App ()
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
  return (
    <div>
      <h2>Let's get started!</h2>
      <p>testest</p>
      <ExpenseItems expenses={expenses}/>

    </div>
  );
}

export default App;
