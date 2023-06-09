import React from 'react';
import './checkalldeletecomplete.css';
import Remain from './remain';
import Checkanddelete from './checkanddelete';


export default function CheckallDeleteRemain({remainCount,checkAll,todo,deleteComplete}) {
  return (
    <div className='general-container'>
        <Remain remainCount={remainCount}/>
        <Checkanddelete checkAll={checkAll} todo={todo} deleteComplete={deleteComplete}/>
    </div>
  )
}
