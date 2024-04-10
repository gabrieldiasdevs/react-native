import React, { createContext, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import api from '../services/api'

export const AuthContext = createContext({})

export default function AuthProvider({ children }){
  const [user, setUser] = useState({
    nome: 'Gabriel Dias'
  })

  const navigation = useNavigation()

  async function signUp(email, password, nome){
    try{

      const response = await api.post('/users', {
        name: nome,
        email: email,
        password: password
      })

      navigation.goBack()

    }catch(err){
      console.log('ERRO AO CADASTRAR', err)
    }
  }

  return(
    <AuthContext.Provider value={{ user, signUp }} >
      {children}
    </AuthContext.Provider>
  )
}