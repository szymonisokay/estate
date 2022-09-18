import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../contexts/auth/AuthContext'

interface Component {
  children: any
}

const ProtectedRoute: React.FC<Component> = ({ children }) => {
  const { getToken } = useAuth()
  const { pathname } = useLocation()

  if (!getToken()) {
    return <Navigate to='/login' state={pathname} />
  }

  return children ? children : <Outlet />
}

export default ProtectedRoute
