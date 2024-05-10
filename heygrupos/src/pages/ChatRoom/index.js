import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FabButton from '../../components/FabButton'

import {
  Container,
  AreaHeader,
  AreaHeaderLeft,
  AreaHeaderRight,
  Button,
  Title
} from './styles'

export default function ChatRoom(){
  const navigation = useNavigation()
  const [modalVisible, setModalVisible] = useState(false)

  function handleSignOut(){
    auth().signOut()
    .then(() => {
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
          <Button onPress={handleSignOut}>
            <MaterialIcons name='arrow-back' size={28} color='#FFF'/>
          </Button>
          <Title> Grupos </Title>
        </AreaHeaderLeft>

        <AreaHeaderRight>
          <MaterialIcons name='search' size={28} color='#FFF'/>
        </AreaHeaderRight>

      </AreaHeader>

      <FabButton setVisible={ () => setModalVisible(true) } />
    </Container>
  )
}