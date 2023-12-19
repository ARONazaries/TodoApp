import React from "react";
import './AppNavbar.css'
import { NavLink } from 'react-router-dom';

function AppNavbar() {
    return (
        <nav>
            <ul>
                {/* <li><NavLink activeclassname="active" to='/'>Home</NavLink></li>
                <li><NavLink activeclassname="active" to='/todos'>ToDos</NavLink></li>
                <li><NavLink activeclassname="active" to='/users'>Users</NavLink></li>
                <li><NavLink activeclassname="active" to='/groups'>Groups</NavLink></li>
                <li><NavLink activeclassname="active" to='/subjects'>Subjects</NavLink></li>
                <li><NavLink activeclassname="active" to='/schedules'>Schedules</NavLink></li> */}

                <li><a href='/'>Home</a></li>
                <li><a href='/todos'>toDos</a></li>
                <li><a href='/users'>Users</a></li>
                <li><a href='/groups'>Groups</a></li>
                <li><a href='/subjects'>Subjects</a></li>
                <li><a href='/schedules'>Schedules</a></li>
            </ul>
        </nav>
    )
}

export { AppNavbar }