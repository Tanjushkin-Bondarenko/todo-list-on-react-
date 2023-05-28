import React from 'react'

export const TodoTask = ({ todo, onRemove }) => {
  return (
    <li className='task'>
      {todo}
      <button className='remove' onClick={onRemove}>remove</button>     
  </li>
    
  )
}
