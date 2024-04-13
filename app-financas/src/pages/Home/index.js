import React, { useContext, useEffect, useState } from 'react'
import { View, Text, Button } from 'react-native'
import { AuthContext } from '../../contexts/auth'
import { Background } from './styles'
import Header from '../../components/Header'
import api from '../../services/api'
import { format } from 'date-fns'

export default function Home(){
  const [listBalance, setListBalance] = useState([])

  const [dateMovements, setDateMoviments] = useState(new Date())

  useEffect(() => {
    let isActive = true

    async function getMovements(){
      let dateFormated = format(dateMovements, 'dd/mm/yyyy')
    }

    getMovements()

  }, [])

  return(
    <Background>
      <Header title='Minhas movimentações' />
    </Background>
  )
}