//component in react is a function that returns jsx
//jsx is a js extension that allows us to write html in js
import './ExpenseItem.css';
import { ExpenseDate } from './ExpenseDate';
import { Card } from '../UI/Card';
import React, { useState } from 'react';


export function ExpenseItem (props)
{

    //props are passed in from the parent component, ie the calling function, in this case App.js

    const [title, setTitle] = useState(props.expenseInfo.title); //[pointer to stateObject, function to update stateObject]

    // let expenseTitle = props.expenseInfo.title;

    const expenseAmount = props.expenseInfo.amount;
    const expenseDate = props.expenseInfo.date;

    const buttonHandler = () => {
        console.log('clicked');
        // expenseTitle = 'Updated';
        setTitle('Updated');
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={expenseDate}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${expenseAmount}</div>
            </div>
            {/* <button onClick={() => {console.log("TESTTEST")}}>Change Title</button> */}
            <button onClick={buttonHandler}>Change Title</button>
        </Card>
    );
}


export class ExpenseItem1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.expenseInfo.title,
        };
    }

    buttonHandler = () => {
        this.setState({title: 'Updated'});
    }

    render() {
        return (
            <Card className='expense-item'>
                <ExpenseDate date={this.props.expenseInfo.date}/>
                <div className='expense-item__description'>
                    <h2>{this.state.title}</h2>
                    <div className='expense-item__price'>${this.props.expenseInfo.amount}</div>
                </div>
                <button onClick={this.buttonHandler}>Change Title</button>
            </Card>
        );
    }
}