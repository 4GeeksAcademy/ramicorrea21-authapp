import React, { useState, useEffect } from "react"
import { useContext } from "react"
import { Context } from "../store/appContext"
import { Navigate } from "react-router-dom"


export const Login = () => {

    const { actions, store } = useContext(Context)

    const initialState = {
        email: "",
        password: ""
    }
    const [user, setUser] = useState(initialState)


    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        actions.login(user)
    }


    return (
        <>
            {store.token != null ? <Navigate to={"/private"} /> : <>
                <div className="alert alert-danger" role="alert">
                    Please write a valid email or password
                </div>
            </>}
            <h1 className='text-center'>Please complete the form to Login</h1>
            <div className='d-flex justify-content-center'>
                <form className='mt-4' onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={user.email} onChange={handleChange} />
                        <div id="emailHelp" className="form-text">You dont have an account? Register one</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={user.password} onChange={handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        </>
    )
}