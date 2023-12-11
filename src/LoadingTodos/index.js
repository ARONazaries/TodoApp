import React from "react"
import './LoadingTodos.css'
import { FaReact } from "react-icons/fa";

function LoadingTodos(){
    return (
        <React.Fragment>
            <div className="statusContainer">
                <FaReact className='icon' size={"4em"} color='white'/>
                <p className="loadingText">Loading your ToDos...</p>
            </div>
            
        </React.Fragment>

    )
}

export { LoadingTodos }