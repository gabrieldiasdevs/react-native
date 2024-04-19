import React, { useContext, useEffect, useState } from 'react'
import { TouchableOpacity, Modal } from 'react-native'
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
import CalendarModal from '../../components/CalendarModal'

export default function Home(){
  const isFocused = useIsFocused()
  const [listBalance, setListBalance] = useState([])
  const [movements, setMovements] = useState([])
  const [modalVisible, setModalVisible] = useState(false)

  const [dateMovements, setDateMoviments] = useState(new Date())

  useEffect(() => {
    let isActive = true

    async function getMovements(){
      let dateFormated = format(dateMovements, 'dd/MM/yyyy')

      const receives = await api.get('/receives', {
        params:{
          date: dateFormated
        }
      })

      const balance = await api.get('/balance', {
        params:{
          date: dateFormated
        }
      })

      if(isActive){
        setListBalance(balance.data)
        setMovements(receives.data)
      }

    }

    getMovements()

    return () => isActive = false

  }, [isFocused, dateMovements])

  async function handleDelete(id){
    try{
      await api.delete('/receives/delete', {
        params:{
          item_id: id
        }
      })

      setDateMoviments(new Date())
    }catch(err){
      console.log(err)
    }
  }

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
        <TouchableOpacity onPress={ () => setModalVisible(true) } >
          <Icon name='event' color='#121212' size={30} />
        </TouchableOpacity>
        <Title>Últimas movimentações</Title>
      </Area>

      <List
        data={movements}
        keyExtractor={ item => item.id }
        renderItem={ ({ item }) => <HistoricoList data={item} deleteItem={handleDelete} /> }
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      <Modal visible={modalVisible} animationType='fade' transparent={true} >
        <CalendarModal
          setVisible={ () => setModalVisible(false) }
        />
      </Modal>

    </Background>
  )
}