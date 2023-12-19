import React from "react";
import './Subjects.css'

function Subjects(props) {
    return (
        <div className="tableContainer">
            <table>
                <thead>
                    <tr>
                        <th>Subject</th>
                        <th>Shortname</th>
                    </tr>
                </thead>

                <tbody>
                    {props.subjects.map((subject) => {
                        return(
                            <tr key={subject.id}>
                                <td>{subject.name}</td>
                                <td>{subject.short_name}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            
        </div>
    )
}

export { Subjects }