import React, { Fragment, useState } from 'react';

const InputTodo = () => {

    const [description, setDescription] = useState("Hello");

    const onSubmitForm = async e=> {
        e.preventDefault();
        try {
            const body = { description };
            const response  = await fetch("http://localhost:5000/todos", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(body)
            });

            console.log(response);
            window.location = "/";
        } catch(err) {
            console.log(err.message);
        }
    }

    return (
        <Fragment>
            <h1 className="text-center mt-5">Input Todo</h1>
            <form onSubmit={onSubmitForm}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp" 
                        value={description} 
                        onChange={e => setDescription(e.target.value)}
                    />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </Fragment>
    );
}


export default InputTodo;