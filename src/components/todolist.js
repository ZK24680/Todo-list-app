import React from 'react';
import './todolist.css';
import Todo from './todo';



export default function Todolist({todos}) {
  return (
    <div className='todolist'>
        {todos && todos.map((todo)=> <Todo key={todo.id} todo={todo}/>)}
    </div>
  )
}
