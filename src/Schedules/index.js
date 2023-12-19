import React from "react";
import './Schedules.css'

function Schedules(props) {

    const schedules = Object.entries(props.schedules);

    function getSchedule(day, starttime){
        if(schedules[day] !== undefined){
            if(schedules[day][1][starttime-9] !== undefined){
                return schedules[day][1][starttime-9].group + " " + schedules[day][1][starttime-9].subject
            } 
        }

        return "-"
    }

    

    return (
        <div className="tableContainer">
            <table>
                <thead>
                    <tr>
                    {[' ', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day, index) => (
                        <th key={index}>{day}</th>
                    ))}
                    </tr>
                </thead>

                <tbody>
                    {[9, 10, 11, 12, 13].map((hour) => (
                    <tr key={hour}>
                        <td>{hour}:00</td>
                        {
                            Array.from({ length: 5 }, (_, i) => (
                                <td key={i}>{
                                    schedules[i] !== undefined ? (
                                        /* Render something if the condition is true */
                                        /* This could be your content or components */
                                        
                                        getSchedule(i,hour)
                                      ) : (
                                        /* Render something else if the condition is false */
                                        /* This could be an alternative content or components */
                                        <span>-</span>
                                      )
                                }</td>
                            ))
                        }
                    </tr>
                    ))}
                </tbody>
            </table>        
        </div>
    )
}



export { Schedules }