import React from 'react';
import './checkanddelete.css';

export default function Checkanddelete() {
  return (
    <div className='check--delete'>
        <button type='button' className='checkall--btn btn'>Check All</button>

        <button type='button' className='deletecomplete--btn btn'>Clear Completed</button>
    </div>
  )
}
