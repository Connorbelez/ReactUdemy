import React from 'react';
import { useState } from 'react';
import './Filter.css';

export const ExpensesFilter = (props) => {

  const dropdownChangeHandler = (event) => {
    console.log("From ExpensesFilter.js: " + event.target.value);
    props.onFilterChange(event.target.value);
  };
  //two way binding requires sending an initial state variable to the child component, 
  //and then sending a function to the child component
  //the function will be used to update the state variable in the parent component
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.value} onChange={dropdownChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

