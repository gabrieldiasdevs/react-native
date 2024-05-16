import React, { useEffect, useState } from 'react'
import { Platform } from 'react-native'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import ChatMessage from '../../components/ChatMessage'
import Feather from 'react-native-vector-icons/Feather'

import {
  Container,
  MessageList,
  KeyboardArea,
  ContainerInput,
  InputArea,
  Input,
  ButtonArea,
  Button
} from './styles'

export default function Messages({ route }){
  const { thread } = route.params
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')

  const user = auth().currentUser.toJSON()

  useEffect(() => {

    const unsubscribeListener = firestore().collection('MESSAGE_THREADS')
    .doc(thread._id).collection('MESSAGES').orderBy('createdAt', 'desc')
    .onSnapshot( querySnapshot => {
      const messages = querySnapshot.docs.map(doc => {
        const firebaseData = doc.data()

        const data = {
          id: doc.id,
          text: '',
          createdAt: firestore.FieldValue.serverTimestamp(),
          ...firebaseData
        }

        if(!firebaseData.system){
          data.user = {
            ...firebaseData.user,
            name: firebaseData.user.displayName
          }
        }

        return data

      })

      setMessages(messages)

    })

    return () => unsubscribeListener()

  }, [])

  async function handleSend(){
    if(input === '') return

    await firestore()
    .collection('MESSAGE_THREADS')
    .doc(thread._id)
    .collection('MESSAGES')
    .add({
      text: input,
      createdAt: firestore.FieldValue.serverTimestamp(),
      user:{
        _id: user.uid,
        displayName: user.displayName
      }
    })

    await firestore()
    .collection('MESSAGE_THREADS')
    .doc(thread._id)
    .set(
      {
        lastMessage:{
          text: input,
          createdAt: firestore.FieldValue.serverTimestamp()
        }
      },
      { merge: true }
    )

    setInput('')
  }

  return(
    <Container>
      <MessageList
        data={messages}
        keyExtractor={ item => item._id }
        renderItem={ ({ item }) => <ChatMessage data={item} /> }
        inverted={true}
      />

      <KeyboardArea
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={100}
      >

        <ContainerInput>

          <InputArea>
            <Input
              placeholder='Digite sua mensagem ...'
              value={input}
              onChangeText={ (text) => setInput(text) }
              multiline={true}
              autoCorrect={false}
            />
          </InputArea>

          <ButtonArea onPress={handleSend}>
            <Button>
              <Feather name='send' size={22} color='#FFF'/>
            </Button>
          </ButtonArea>

        </ContainerInput>
      </KeyboardArea>

    </Container>
  )
}