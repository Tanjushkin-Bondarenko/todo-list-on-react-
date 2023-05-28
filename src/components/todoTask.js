import React from 'react'
import BsCheckLg from 'react-icons/bs'
export const TodoTask = ({ todo, onRemove }) => {
  return (
    <li className='task'>
      {todo}
      <button className='remove' onClick={onRemove}>remove</button>     
  </li>
    
  )
}
