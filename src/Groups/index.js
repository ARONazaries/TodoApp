import React from "react";
import './Groups.css'

function Groups(props) {
    return (
        <div className="tableContainer">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Academic Year</th>
                    </tr>
                </thead>

                <tbody>
                    {props.groups.map((group) => {
                        return(
                            <tr key={group.id}>
                                <td>{group.name}</td>
                                <td>{group.academic_year_id}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            
        </div>
    )
}

export { Groups }