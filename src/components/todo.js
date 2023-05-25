import React from 'react';
import './todo.css';
import {useState} from 'react';
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';

defineElement(lottie.loadAnimation);

export default function Todo({todo,deleteTodo,updateTodo}) {

    let [isEdit,setEdit] = useState(false);
    let [title,setTitle] = useState(todo.title)


    let checkComplete= ()=>{

        let updatetodo = {
            id : todo.id,
            title : todo.title,
            completed : !todo.completed
        }


        updateTodo(updatetodo);

    }


    let submitEdit = (e)=> {
        e.preventDefault();
        let updateTitle = {
            id: todo.id,
            title,
            completed : todo.completed

        }

        updateTodo(updateTitle);
        setEdit(false);
    }


  return (
    <div className={`todo ${todo.completed ? 'completed' : ''}`}>


        {!isEdit && <p>{todo.title}</p>}
        {isEdit &&  <form onSubmit={submitEdit}>
                        <input type='text' className='todoEdit' autoComplete='off' value={title} onChange={(e)=> setTitle(e.target.value)}></input>

                        <button type='submit' className='editSave--btn'>Save</button>
                    </form> 
        }

        {!isEdit && <div className='todo-editor'>
                <form>
                    <input type='checkbox' name='' checked={todo.completed} onChange={checkComplete}  className='check' id={`check${todo.id}`} ></input>
                    <label htmlFor={`check${todo.id}`}  className='check-item'>
                            <ion-icon  name="checkmark-outline"></ion-icon>
                    </label>
                </form>

                <button type='button' className='edit--btn' onClick={()=> setEdit(true)}>
                    <lord-icon

                        

                        src="https://cdn.lordicon.com/bxxnzvfm.json"
                        trigger="hover"
                        colors="primary:#3a3347,secondary:#ffc738,tertiary:#f9c9c0,quaternary:#ebe6ef"
                        style={{
                            width: '60px',
                            height : '60px',
                            cursor : 'pointer',
                            transform : 'rotate(25deg)'
                        }}>
                    </lord-icon>
                </button>
            </div>
        } 

        

        <button type='button' className='btn' onClick={()=> deleteTodo(todo.id)}>
            <lord-icon
                src="https://cdn.lordicon.com/qjwkduhc.json"
                trigger="hover"
                colors="primary:#c1121f,secondary:#ebe6ef,tertiary:#c1121f"
                style={{
                    width : '30px',
                    height : '30px'
                }}>
            </lord-icon>
        </button>
    </div>
  )
}
