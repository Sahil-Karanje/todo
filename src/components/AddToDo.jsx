import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToDo } from '@/lib/features/todos/todoSlice' 
import './styles/addto.css'

const AddToDo = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const handleAdd = (e)=>{
        e.preventDefault()
        dispatch(addToDo(input))
        document.getElementById('inp').value = ''
    }

    return (
        <form>
            <div className="inputAdd">
                <input id='inp' type="text" onChange={(e) => {setInput(e.target.value)}} />
                <button onClick={handleAdd}>Add</button>
            </div>
        </form>
    )
}

export default AddToDo