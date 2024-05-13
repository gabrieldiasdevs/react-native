import React, { useState, useEffect } from 'react'
import { ActivityIndicator } from 'react-native'
import { useNavigation, useIsFocused } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FabButton from '../../components/FabButton'
import ModalNewRoom from '../../components/ModalNewRoom'
import firestore from '@react-native-firebase/firestore'
import ChatList from '../../components/ChatList'

import {
  Container,
  AreaHeader,
  AreaHeaderLeft,
  AreaHeaderRight,
  Button,
  Title,
  Modal,
  RoomList
} from './styles'

export default function ChatRoom(){
  const navigation = useNavigation()
  const isFocused = useIsFocused()
  const [modalVisible, setModalVisible] = useState(false)
  const [user, setUser] = useState(null)
  const [threads, setThreads] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const hasUser = auth().currentUser ? auth().currentUser.toJSON() : null
    setUser(hasUser)
  }, [isFocused])

  useEffect(() => {
    
    let isActive = true

    function getChats(){
      firestore().collection('MESSAGE_THREADS')
      .orderBy('lastMessage.createdAt', 'desc')
      .limit(10).get()

      .then((snapshot) => {
        const threads = snapshot.docs.map( documentSnapshot => {
          return{
            _id: documentSnapshot.id,
            name: '',
            lastMessage: { text: '' },
            ...documentSnapshot.data()
          }
        })

        if(isActive){
          setThreads(threads)
          setLoading(false)
        }
        
      })

    }

    getChats()

    return () => {
      isActive = false
    }

  }, [isFocused])

  function handleSignOut(){
    auth().signOut()
    .then(() => {
      setUser(null)
      navigation.navigate('SignIn')
    })
    .catch((error) => {
      console.log(error)
    })
  }


  if(loading){
    return(
      <ActivityIndicator size='large' color='#555'/>
    )
  }


  return(
    <Container>
      <AreaHeader>
        <AreaHeaderLeft>

          { user && (
            <Button onPress={handleSignOut}>
              <MaterialIcons name='arrow-back' size={28} color='#FFF'/>
            </Button>
          )}

          <Title> Grupos </Title>
        </AreaHeaderLeft>

        <AreaHeaderRight>
          <MaterialIcons name='search' size={28} color='#FFF'/>
        </AreaHeaderRight>
      </AreaHeader>

      <RoomList
        data={threads}
        renderItem={ ({ item }) => <ChatList data={item} /> }
        keyExtractor={ item => item._id }
        showsVerticalScrollIndicator={false}
      />

      <FabButton setVisible={ () => setModalVisible(true) } userStatus={user} />

      <Modal visible={modalVisible} animationType='fade' transparent={true}>
        <ModalNewRoom setVisible={ () => setModalVisible(false) }/>
      </Modal>
    </Container>
  )
}