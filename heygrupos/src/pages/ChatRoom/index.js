import React, { useState, useEffect } from 'react'
import { useNavigation, useIsFocused } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FabButton from '../../components/FabButton'
import ModalNewRoom from '../../components/ModalNewRoom'

import {
  Container,
  AreaHeader,
  AreaHeaderLeft,
  AreaHeaderRight,
  Button,
  Title,
  Modal
} from './styles'

export default function ChatRoom(){
  const navigation = useNavigation()
  const isFocused = useIsFocused()
  const [modalVisible, setModalVisible] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const hasUser = auth().currentUser ? auth().currentUser.toJSON() : null
    setUser(hasUser)
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

      <FabButton setVisible={ () => setModalVisible(true) } userStatus={user} />

      <Modal visible={modalVisible} animationType='fade' transparent={true}>
        <ModalNewRoom setVisible={ () => setModalVisible(false) }/>
      </Modal>
    </Container>
  )
}