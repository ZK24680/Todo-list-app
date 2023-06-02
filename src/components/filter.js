import React, { useEffect } from 'react';
import { useState } from 'react';
import './filter.css';

export default function Filter({filterfunction}) {


  let [filter,setFilter] = useState('All');

  


  let filterBtn = (e)=>{
    e.preventDefault();
    setFilter(e.target.innerHTML);
  }

  useEffect(()=>{
    filterfunction(filter);
  },[filter,filterfunction]);


  return (
    <div className='filter'>
        <ul>
            <li><a href='#' className={`${filter === 'All' ? 'active' : ''}`} onClick={filterBtn}>All</a></li>
            <li><a href='#' className={`${filter === 'Completed' ? 'active' : ''}`} onClick={filterBtn}>Completed</a></li>
            <li><a href='#' className={`${filter === 'Todo' ? 'active' : ''}`} onClick={filterBtn}>Todo</a></li>
        </ul>
    </div>
  )
}
