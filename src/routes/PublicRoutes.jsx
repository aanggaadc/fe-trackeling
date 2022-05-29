import React from 'react'
import { Navigate, Outlet } from "react-router-dom"
import useAuth from '../utils/auth'

function PublicRoutes() {
    const authData = useAuth()

    return authData ? <Navigate to={'/'} /> : <Outlet />
}

export default PublicRoutes