import React, { useState, useEffect, useRef } from 'react'

function ToDoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');


    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })



    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        });


        setInput('');
    }
    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} placeholder="Add to do" value={input} name='text' className='todo-input' ref={inputRef} />
            <button className='todo-button'>Add todo</button>
        </form>
    )
}

export default ToDoForm