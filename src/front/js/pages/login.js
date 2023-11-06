import React, {useState, useEffect} from "react"
import { useContext } from "react"
import { Context } from "../store/appContext"
import { useNavigate } from "react-router-dom"



export const Login = () =>{

    const Navigate = useNavigate()
    const {actions, store} = useContext(Context)

    const initialState = {
        email :"",
        password:""
    }
    const [user, setUser] = useState(initialState)


    const handleChange = (e) =>{
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        actions.login(user)
    }

    
    let token = sessionStorage.getItem("token")
    if(token && token != "" && token != undefined){
        Navigate('/private')
    }
    

    return(
        <>
        <h1 className='text-center'>Please complete the form to Login</h1>
            <div className='d-flex justify-content-center'>
                <form className='mt-4' onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={user.email}  onChange={handleChange} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={user.password} onChange={handleChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        </>
    )
}