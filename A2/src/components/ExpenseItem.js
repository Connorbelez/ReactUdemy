//component in react is a function that returns jsx
//jsx is a js extension that allows us to write html in js
import './ExpenseItem.css';
import { ExpenseDate } from './ExpenseDate';
import { Card } from './Card';
export function ExpenseItem (props)
{

    //props are passed in from the parent component, ie the calling function, in this case App.js

    const expenseTitle = props.expenseInfo.title;
    const expenseAmount = props.expenseInfo.amount;
    const expenseDate = props.expenseInfo.date;

    return (
        <Card className='expense-item'>
            <ExpenseDate date={expenseDate}/>
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div className='expense-item__price'>${expenseAmount}</div>
            </div>
        </Card>
    );
}


