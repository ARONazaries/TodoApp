import React from "react";
import './Users.css'

function Users(props) {
    return (
        <div className="tableContainer">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Type</th>
                        <th>Email</th>
                        <th>Telephone</th>
                        <th>Address</th>

                    </tr>
                </thead>

                <tbody>
                    {props.users.map((user) => {
                        return(
                            <tr key={user.id}>
                                <td>{user.first_name}</td>
                                <td>{user.last_name}</td>
                                <td>{user.type}</td>
                                <td>{user.email}</td>
                                <td>{user.telephone}</td>
                                <td>{user.address}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            
        </div>
    )
}

export { Users }