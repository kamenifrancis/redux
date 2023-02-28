import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';
const slice = createSlice({
    name: 'todo',
    initialState: [ 
        {id: 1, text: "todo list 1 ", isDone: false },
        {id: 2, text: "todo list 2 ", isDone: false },
        {id: 3, text: "todo list 3", isDone: false },
        {id: 4, text: "todo list 4", isDone: false },
],
reducer : {
    addTask:(state,action)=>{ 
        const newTask={
            id:uuidv4(),
            isDone:false,
            text:action.payload
        } 
        state.push(newTask)

    }, 
    toggletask:(state,action)=>{ 
const task = state.find((el)=>el.id === action.payload);
task.isDone = !task.isDone
    },
    deletetask:(state,action)=>{
        state= state.filter((el) =>el.id !== action.payload)
        return state
    }
}
 })