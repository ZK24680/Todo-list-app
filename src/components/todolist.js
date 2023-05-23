import React from 'react';
import './todolist.css';
import Todo from './todo';

let num = [1,2,3,4,6,7,84,5,45];

export default function Todolist() {
  return (
    <div className='todolist'>
        {num.map(num=> <Todo num={num} key={num}/>)}
    </div>
  )
}
