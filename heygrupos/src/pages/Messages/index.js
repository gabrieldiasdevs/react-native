import React, { useEffect, useState } from 'react'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

import {
  Container
} from './styles'

export default function Messages({ route }){
  const { thread } = route.params
  const [messages, setMessages] = useState([])

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

  return(
    <Container>

    </Container>
  )
}