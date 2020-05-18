import React, { Fragment, useEffect, useState } from 'react';
import EditTodo from "./EditTodo"

const ListTodos = () => {
    const [ todos, setTodos ] = useState([]);
    
    const deleteTodo = async (id) => {
        try {
            const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
                method: "DELETE"
            });

            console.log(deleteTodo);
            setTodos(todos.filter(todo => todo.id !== id))
        } catch(err) { 
            console.error(err.message);
        }
    }

    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:5000/todos"); 
            const jsonData = await response.json();

            setTodos(jsonData);
        } catch(err) {
            console.log(err.message)
        }
    };

    useEffect(() => {
        getTodos()}, []);
        
    console.log(todos);

    return (
        <Fragment>
            <table className="table">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map(todo => (
                        <tr key={todo.id}>
                           <td>{ todo.description }</td>
                           <td>
                               <EditTodo todo={todo} />
                           </td>
                           <td>
                               <button className="btn btn-danger"
                                onClick={() => deleteTodo(todo.id)}
                               >
                                   Delete
                               </button>
                           </td>
                        </tr>
                    ))}
                </tbody>                
            </table>
        </Fragment>
    )
};

export default ListTodos;