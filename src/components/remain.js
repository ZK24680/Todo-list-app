import React from 'react';
import './remain.css';

export default function Remain({remainCount}) {
  return (
    <div className='remain'><span>{remainCount}</span> {`${remainCount > 1 ? 'tasks' : 'task'}`} ramaining</div>
  )
}
