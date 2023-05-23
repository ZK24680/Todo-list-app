import React from 'react';
import './inputform.css';

export default function inputform() {
  return (
    
    <form className='form-input'>
        <input type="text" className='form-control' name='' id='todo-form' autoComplete='off'></input>
        <button type='submit' className='btn-submit'><ion-icon name="arrow-forward-outline"></ion-icon></button>
    </form>
    
  )
}
