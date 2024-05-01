import { useState } from 'react';
import { DateTime } from 'luxon';
import './tasks.scss'

export default function Tasks({name, finish, onToggle, onDelete}) {
  const createdAt = DateTime.now().toFormat("yyyy-MM-dd, HH:mm:ss");
  
  return (
    <div className={'task ' + (finish ?'finish': '')}>
        <div className="inputCheck"><input type="checkbox" checked={finish} onChange={() => onToggle(!finish)}/></div>
        
        <div className="taskName">
          <span>{name}</span>
          <span className="dash">-</span>
          <h4 className='date'>{createdAt}</h4>
        </div>
        
        <button className="del" onClick={onDelete}>
          <i className="trash fa-solid fa-trash"></i>
        </button>
    </div>
  )
}
