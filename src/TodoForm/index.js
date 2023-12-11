import React from "react";
import './TodoForm.css'
import { TodoContext } from '../TodoContext'
import { FaCheck } from 'react-icons/fa';

function TodoForm() {
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }
    return (
        <div className='creatingTodo'>
            <form onSubmit={onSubmit}>
                <textarea className="createInput" 
                    placeholder="Write your ToDo here"
                    value={newTodoValue}
                    onChange={onChange}>
                    
                </textarea>

                <div className='images'>
                    <button
                        className='todo-item-img'>
                        <FaCheck color='green' size="1.3em"/>
                    </button>

                </div>
            </form>
        </div>
    )
}

export { TodoForm }