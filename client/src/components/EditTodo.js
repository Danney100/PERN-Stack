import React, { Fragment, useState } from "react";

const EditTodo = ({ todo }) => {
    const [ description, setDescription ] = 
    useState(todo.description);

    const updateDescription = async e => {
        e.preventDefault();
        try {
            const body = { description };
            const reponse = await fetch(
                `http://localhost:5000/toods/${todo.id}`,
                {
                    method: "PUT",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(body)
                } 
            );
            
            console.log(reponse);
            window.location="/";
        } catch (err) {
            console.error(err.message);
        }
    }

    console.log(todo);
    return (
        <Fragment>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#id${todo.id}`}>
            Edit
            </button>

            <div className="modal" id={`id${todo.id}`}>
                <div className="modal-dialog">
                    <div className="modal-content">

                    <div className="modal-header">
                        <h4 className="modal-title">EditTodo</h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>

                    <div className="modal-body">
                        <input 
                            type="text"
                            className="form-control"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        />
                    </div>

                    <div className="modal-footer">
                        <button type="button"
                         className="btn btn-success"
                         data-dismiss="modal"       
                         onClick={e => updateDescription(e)}
                        >
                            Save
                        </button>
                        <button type="button" className="btn btn-warning" data-dismiss="modal">Cancel</button>
                    </div>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default EditTodo;