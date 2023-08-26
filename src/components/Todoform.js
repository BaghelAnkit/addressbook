// import React from 'react'
// import { useState } from 'react';
import React, { useState } from 'react';

function Todoform(props) {
    const [input, setInput] = useState(' ');
    const handleChange = e => {
        e.preventDefault();
    }
    const handleSubmit = e => {
        e.preventDefault();

    }
    return ( < div >
        <
        form className = "Todo_form"
        onSunmit = { handleSubmit } >
        <
        input type = 'text'
        placeholder = 'add a todo '
        value = { input }
        name = "text"
        className = 'Todo input'
        onChange = { handleChange }
        /> <
        button className = 'Todo-button' > Add todo < /button>

        <
        /form>

        <
        /div>
    )
}

export default Todoform