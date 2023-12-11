import './AppHeader.css'
import { FaReact } from "react-icons/fa";

function AppHeader() {
    return (
        <header>
            <figure className='header-logo'>
                <FaReact size={"4em"} color='rgb(112, 215, 255)'/>
            </figure>
            <h1>
                ToDos Application
            </h1>
        </header>
    )
}

export {AppHeader}