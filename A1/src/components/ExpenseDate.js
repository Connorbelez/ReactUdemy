import './ExpenseDate.css';
export function ExpenseDate(props){
    const date = props.date;//remember we wrap the args in the props object

    const month = date.toLocaleString('en-US', { month: 'long' });
    const day = date.toLocaleString('en-US', { day: '2-digit' });
    const year = date.getFullYear();

    return(
        <div className="expense-date">
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__day'>{day}</div>
            <div className='expense-date__year'>{year}</div>
        </div>
    );

}