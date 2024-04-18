import React, { useContext, useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { AuthContext } from '../../contexts/auth'
import { 
  Background, 
  ListBalance,
  Area,
  Title,
  List
} 
from './styles'
import Header from '../../components/Header'
import api from '../../services/api'
import { format } from 'date-fns'
import { useIsFocused } from '@react-navigation/native'
import BalanceItem from '../../components/BalanceItem'
import Icon from 'react-native-vector-icons/MaterialIcons'
import HistoricoList from '../../components/HistoricoList'

export default function Home(){
  const isFocused = useIsFocused()
  const [listBalance, setListBalance] = useState([])

  const [dateMovements, setDateMoviments] = useState(new Date())

  useEffect(() => {
    let isActive = true

    async function getMovements(){
      let dateFormated = format(dateMovements, 'dd/MM/yyyy')

      const balance = await api.get('/balance', {
        params:{
          date: dateFormated
        }
      })

      if(isActive){
        setListBalance(balance.data)
      }

    }

    getMovements()

    return () => isActive = false

  }, [isFocused])

  return(
    <Background>
      <Header title='Minhas movimentações' />

      <ListBalance
        data={listBalance}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={ item => item.tag }
        renderItem={ ({ item }) => ( <BalanceItem data={item} /> ) }
      />

      <Area>
        <TouchableOpacity>
          <Icon name='event' color='#121212' size={30} />
        </TouchableOpacity>
        <Title>Últimas movimentações</Title>
      </Area>

      <List
        data={[]}
        keyExtractor={ item => item.id }
        renderItem={ ({ item }) => <HistoricoList/> }
        showsHorizontalScrollIndicator={false}
      />

    </Background>
  )
}