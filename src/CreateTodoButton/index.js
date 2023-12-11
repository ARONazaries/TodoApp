import './CreateTodoButton.css'
import { IoAddCircle } from "react-icons/io5"


function CreateTodoButton({onCreate, hidden}) {
    return(
        <div className='buttonContainer'> 
            <IoAddCircle id='todoButton' size={'4em'} className='todoButton' onClick={onCreate}/>
        </div>
       
    );
}

export {CreateTodoButton}