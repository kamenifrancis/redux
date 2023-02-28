import React from 'react'
import TodoElement from './TodoElement'
import { useSelector } from 'react-redux'
const TodoList = () => {
    const todo = useSelector(state=>state.todo)
    console.log('redux state init', todo) 
  return (
    <div>
      <TodoElement/>
    </div>
  )
}

export default TodoList
