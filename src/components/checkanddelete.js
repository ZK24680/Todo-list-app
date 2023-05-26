import React from 'react';
import './checkanddelete.css';

export default function Checkanddelete({checkAll,todo:todos,deleteComplete}) {

  let checkallTodo = ()=>{
      let newTodos = todos.map(todo => {

        if(!todo.completed){
          todo.completed = true;
        }

        return todo
      })

      checkAll(newTodos);
  }


  let deleteCompleteAction = ()=>{
      let delTodos = todos.filter(todo=> todo.completed);
      
      deleteComplete(delTodos);
      
  }


  return (
    <div className='check--delete'>
        <button type='button' className='checkall--btn btn' onClick={checkallTodo}>Check All</button>

        <button type='button' className='deletecomplete--btn btn' onClick={deleteCompleteAction}>Clear Completed</button>
    </div>
  )
}
