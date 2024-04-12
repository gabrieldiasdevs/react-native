import React, { useContext } from 'react'

import { AuthContext } from '../contexts/auth'

import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'

export default function Routes(){
  const loading = false

  const { signed } = useContext(AuthContext)

  return(
    signed ? <AppRoutes/> : <AuthRoutes/>
  )
}