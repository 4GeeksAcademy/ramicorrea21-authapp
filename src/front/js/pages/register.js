import React, {useState} from 'react'

export const Register = () => {
    const initialState = {
        email : "",
        password : ""
    }
    const [user, setUser] = useState(initialState)

    const handleChange = (e) =>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }

    return (
        <>
            <h1 className='text-center'>Please complete the form to register a new user</h1>
            <div className='d-flex justify-content-center'>
                <form className='mt-4'>
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