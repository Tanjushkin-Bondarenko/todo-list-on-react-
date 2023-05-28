import React, {useState, useEffect} from 'react';
import { TodoTask } from './todoTask';
import "./style.scss"

import { Button } from '@mui/material'


export const TodoList = () => {
    const [todoList, setTodoList] = useState([]);
    const [todo, setTodo] = useState('');
    const [modal, setModal] = useState(false);
    const [disable, setDisable] = useState(true)
    
    useEffect(() => {
        const todoFromStorage = JSON.parse(localStorage.getItem('todoList'));
        if (todoFromStorage && todoFromStorage.length > 0) {
            setTodoList(todoFromStorage);
        }
    }, []);
    const addTodo = () => {
        setModal(true);
    }
    const createTodo = (e) => {
        if (e.target.value.length < 1) {
            setDisable(true)
        } else {
            setTodo(e.target.value);
            setDisable(false)
        }
    }
    const addTaskToList = () => {
        const newTodo = todo;
        if (newTodo) {
            const newTodos = [...todoList, newTodo]
            setTodoList(newTodos);
            localStorage.setItem('todoList', JSON.stringify(newTodos));
        }
        setModal(false)
    }
    const canselAddTask = () => {
        setModal(false);
    }
    const remove = (index) => {
        console.log(index)
        const newTodoList = [...todoList];
        console.log("1",newTodoList)
        newTodoList.splice(index, 1);
        console.log(newTodoList)
        setTodoList(newTodoList);
        localStorage.setItem('todoList', JSON.stringify(newTodoList))
        
    }
  return (
    <div>
    <div className= {` ${modal ? "hide" : "show"}`}>
          <h2>second todo list</h2>
              <button className='addTask' onClick={addTodo}>Create new task</button>
          <ul className='tasks'>
                  { 
                      todoList.map((todo, index) => (
                      <TodoTask
                          className='todo'
                          key={index}
                          todo={todo}
                          onRemove={()=> remove(index)}
                          />
                      ))              }
              </ul>
          </div>
          <div className= {`${modal ? "modal" : "closeModal"}`}> 
              <input onChange={createTodo} value={todo} type='text' className='inputTask' />
              <button disabled={disable} onClick={addTaskToList}>ready</button>
              <button onClick={canselAddTask}>cansel</button>
        </div>
          </div>
  )
}
