import React from 'react';
import './checkalldeletecomplete.css';
import Remain from './remain';
import Checkanddelete from './checkanddelete';


export default function CheckallDeleteRemain() {
  return (
    <div className='general-container'>
        <Remain/>
        <Checkanddelete/>
    </div>
  )
}
