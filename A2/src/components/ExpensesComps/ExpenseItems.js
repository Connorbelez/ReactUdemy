import { ExpenseItem, ExpenseItem1 } from "./ExpenseItem";
import { Card } from "../UI/Card";
import "./Expenses.css";
import { useState } from "react";
import { ExpensesFilter } from "../Filter/ExpensesFilter";
export function ExpenseItems (props)
{
    const [selectedYear, setSelectedYear] = useState('2020');

    const addFilterHandler = (selectedYear) => {
        console.log("From Expenses.js: " + selectedYear);
        console.log(selectedYear);
        setSelectedYear(selectedYear);
    }
  //two way binding requires sending an initial state variable to the child component, 
  //and then sending a function to the child component
  //the function will be used to update the state variable in the parent component
  //here the two way binding is accomplished with the custom prop value and onFilterChange,
    return (
        <div> 
 
            <Card className="expenses">
            <ExpensesFilter value={selectedYear} onFilterChange={addFilterHandler}/>
                {/* <ExpenseItem
                    title={props.expenses[0].title}
                    amount={props.expenses[0].amount}
                    date={props.expenses[0].date}
                ></ExpenseItem>
                <ExpenseItem
                    title={props.expenses[1].title}
                    amount={props.expenses[1].amount}
                    date={props.expenses[1].date}
                ></ExpenseItem> */}
                <ExpenseItem1 expenseInfo={props.expenses[0]}></ExpenseItem1>
                <ExpenseItem expenseInfo={props.expenses[1]}></ExpenseItem>
            </Card>
        </div>
    );
}