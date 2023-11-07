import React from 'react'
import { useContext } from 'react'
import { Context } from '../store/appContext'
import { Navigate } from 'react-router-dom'
export const Private = () =>{
    const {store} = useContext(Context)

    return(
        <div className='d-flex justify-content-center'>
            {store.token == null && <Navigate to={'/login'}/>}
            <h1>Hi this is a private page and you can only see it if your have your token </h1>
        </div>
    )
}