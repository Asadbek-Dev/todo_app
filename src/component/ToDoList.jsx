import React, { useState } from 'react'
import Todo from './Todo';
import ToDoForm from './ToDoForm'

function ToDoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }
        const newTodos = [todo, ...todos]

        setTodos(newTodos);
        console.log(todo, ...todos)
    };

    const removeTodo = (id) => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr);
    };

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    };

    const completeTodo = (id) => {
        let updateTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updateTodos)
    }
    return (
        <div>
            <h1>Bugungi rejalaringiz qanday?</h1>
            <ToDoForm onSubmit={addTodo} />
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
        </div>
    )
}

export default ToDoList