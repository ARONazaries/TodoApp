import React from 'react';
import { TodoContext } from '../TodoContext/'
import './TodoCounter.css'

function TodoCounter() {

    const {
        completedTodos,
        totalTodos,
    } = React.useContext(TodoContext)

    return(
        <h2>
            You completed {completedTodos} out of {totalTodos} ToDos
        </h2>
    );
}

export {TodoCounter};