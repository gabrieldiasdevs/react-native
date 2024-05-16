import React, { useState, useEffect } from 'react'
import { Keyboard } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import { useIsFocused } from '@react-navigation/native'
import ChatList from '../../components/ChatList'

import {
  Container,
  ContainerInput,
  Input,
  Button,
  RoomList
} from './styles'


export default function Search(){
  const isFocused = useIsFocused()
  const [input, setInput] = useState('')
  const [user, setUser] = useState(null)
  const [chats, setChats] = useState([])

  useEffect(() => {

    const hasUser = auth().currentUser ? auth().currentUser.toJSON() : null
    setUser(hasUser)

  }, [isFocused])

  async function handleSearch(){
    if(input === '') return

    const responseSearch = await firestore()
    .collection('MESSAGE_THREADS')
    .where('name', '>=', input)
    .where('name', '<=', input + '\uf8ff')
    .get()
    .then((querySnapshot) => {

      const threads = querySnapshot.docs.map( documentSnapshot => {
        return{
          _id: documentSnapshot.id,
          name: '',
          lastMessage: { text: '' },
          ...documentSnapshot.data()
        }
      })

      setChats(threads)
      setInput('')
      Keyboard.dismiss()

    })
  }

  return(
    <Container>
      <ContainerInput>
          <Input
            placeholder='Digite o nome da sala?'
            value={input}
            onChangeText={ (text) => setInput(text) }
            autoCapitalize='none'
          />

        <Button onPress={handleSearch}>
          <MaterialIcons name='search' size={30} color='#FFF'/>
        </Button>
      </ContainerInput>

      <RoomList
        data={chats}
        keyExtractor={ item => item._id }
        renderItem={ ({ item }) => <ChatList data={item} userStatus={user} /> }
        showsVerticalScrollIndicator={false}
      />
    </Container>
  )
}