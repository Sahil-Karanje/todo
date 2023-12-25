import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: "Cofee" }]
}

export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers: {
        addToDo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeToDo: (state, action) => {
            state.todos = state.todos.filter((t) => t.id !== action.payload)
        }
    }
})

export const {addToDo, removeToDo} = todoSlice.actions
export default todoSlice.reducer