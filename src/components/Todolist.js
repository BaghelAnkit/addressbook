import React, { useState } from 'react'
import Todoform from './Todoform'

function Todolist() {
    const [todos, setTodo] = useState([]);
    // const addTodo =todo =>{
    //     if(!todo.text || /^\s*$/.test(todo.text)){
    //         return;
    //     }
    //     const newTodos =[todo,...todos]
    //     setTodo(newTodos)
    //     console.log(...todos)
    // }
    return ( <
        div >
        <
        h1 > what 's your today todo</h1> <
        Todoform onSubmit = {
            (e) => addTodo() }
        />

        <
        /div>
    )
}

export default Todolist