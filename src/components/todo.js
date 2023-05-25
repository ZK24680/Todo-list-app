import React from 'react';
import './todo.css'
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';

defineElement(lottie.loadAnimation);

export default function Todo({todo}) {
  return (
    <div className='todo'>


        <p>{todo.title}</p>
        {/* <form>
            <input type='text' className='todoEdit' autoComplete='off'></input>
        </form> */}

        <div className='todo-editor'>
            <form>
                <input type='checkbox' name='' className='check' id={`check${todo.id}`}></input>
                <label htmlFor={`check${todo.id}`} className='check-item'>
                        <ion-icon  name="checkmark-outline"></ion-icon>
                </label>
            </form>

            <lord-icon
               
                src="https://cdn.lordicon.com/bxxnzvfm.json"
                trigger="hover"
                colors="primary:#3a3347,secondary:#ffc738,tertiary:#f9c9c0,quaternary:#ebe6ef"
                style={{
                    width: '50px',
                    height : '50px',
                    cursor : 'pointer',
                    transform : 'rotate(25deg)'
                }}>
            </lord-icon>
        </div>

        <button type='button' className='btn'>
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
