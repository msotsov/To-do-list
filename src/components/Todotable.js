import React from 'react';

export default function TodoTable(props) {
    return (
        <div>
            <table>
            <tbody>
                {props.todos.map((todooo, index) => 
                <tr key={index}>
                    <td>{todooo.desc}</td>
                    <td>{todooo.date}</td>
                    <td><button onClick={() => props.delete(index)}>Delete</button></td>
                </tr>)
                }
            </tbody>
        </table>
        </div>
    )
}

