import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeToDo } from '@/lib/features/todos/todoSlice'
import './styles/todos.css'
import { MdDelete } from "react-icons/md";

const ToDos = () => {
    const Todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    return (
        <div className='todos_container'>
            {Todos.map((t) => {
                return (
                    <li key={t.id}><span>{t.text}</span> <button id='del_btn' onClick={() => { dispatch(removeToDo(t.id)) }}><MdDelete size={20} /></button></li>
                )
            })}
        </div>
    )
}

export default ToDos