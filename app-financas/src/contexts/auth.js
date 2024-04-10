import React, { createContext, useState } from 'react'

export const AuthContext = createContext({})

export default function AuthProvider({ children }){
  const [user, setUser] = useState({
    nome: 'Gabriel Dias'
  })

  return(
    <AuthContext.Provider value={{ user }} >
      {children}
    </AuthContext.Provider>
  )
}