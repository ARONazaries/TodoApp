import './TodoItem.css'
import { FaCheck } from 'react-icons/fa';
import { BsXCircleFill } from 'react-icons/bs';

function TodoItem({text, completed, onComplete, onDelete}) {
    return(
      <div className={completed ? 'child-container-todo-completed' : 'child-container'}>
        <p>{text}</p>
        <div className='images'>
          <button
            onClick={onComplete}
            hidden={completed}
            className='todo-item-img'>
            <FaCheck color='white' size="1.3em"/>
          </button>
  
          <button
            onClick={onDelete}
            className='todo-item-img'>
            <BsXCircleFill color='white' size="1.3em"/>
          </button>
  
        </div>
      </div>
    );
}

export { TodoItem }
  
  