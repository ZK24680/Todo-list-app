import React, { useState } from 'react';
import './inputform.css';

export default function Inputform({addTodo}) {


  let [title,setTitle] = useState('');

  

  let submitToadd = (e)=>{
    e.preventDefault();
    
    let newTodo = {
      id : Math.random()*1000 + 1 ,
      title,
      completed : false
    }

    addTodo(newTodo);
    setTitle('');
  }

  return (
    
    <form className='form-input' onSubmit={submitToadd}>
        <input type="text" className='form-control' name='' id='todo-form' autoComplete='off' onChange={(e)=> setTitle(e.target.value)} value={title}></input>
        <button type='submit' className='btn-submit'><ion-icon name="arrow-forward-outline"></ion-icon></button>
    </form>
    
  )
}
