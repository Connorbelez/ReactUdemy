import { ExpenseItem } from "./ExpenseItem";
import { Card } from "../UI/Card";
import "./Expenses.css";

export function ExpenseItems (props)
{
    
    return (
        <Card className="expenses">
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
            <ExpenseItem expenseInfo={props.expenses[0]}></ExpenseItem>
            <ExpenseItem expenseInfo={props.expenses[1]}></ExpenseItem>
        </Card>
    );
}