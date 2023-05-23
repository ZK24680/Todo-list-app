import React from 'react';
import './filter.css';

export default function Filter() {
  return (
    <div className='filter'>
        <ul>
            <li><a href='#' className='active'>All</a></li>
            <li><a href='#' >Completed</a></li>
            <li><a href='#' >Todo</a></li>
        </ul>
    </div>
  )
}
