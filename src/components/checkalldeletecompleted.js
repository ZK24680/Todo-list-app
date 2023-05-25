import React from 'react';
import './checkalldeletecomplete.css';
import Remain from './remain';
import Checkanddelete from './checkanddelete';


export default function CheckallDeleteRemain({remainCount}) {
  return (
    <div className='general-container'>
        <Remain remainCount={remainCount}/>
        <Checkanddelete/>
    </div>
  )
}
