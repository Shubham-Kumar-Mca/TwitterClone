import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoutes = ({children}) => {
    const isAuth = true

    if(!isAuth){
        return <Navigate to="/sign-in"/>
    }
    return children

 
}

export default PrivateRoutes