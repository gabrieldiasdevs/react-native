import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { db } from './src/firebaseConnection'
import { doc, getDoc, onSnapshot, setDoc, collection, addDoc } from 'firebase/firestore'

export default function App() {

  const [nome, setNome] = useState('Carregando...')

  useEffect(() => {

     async function getDados() {

    //   const docRef = doc(db, 'users', '1')

    //   getDoc(docRef)
    //   .then((snapshot) => {
    //     setNome(snapshot.data()?.nome)
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })

    onSnapshot(doc(db, 'users', '1'), (doc) => {
      setNome(doc.data()?.nome)
    })
  
  }

    

    getDados()

  }, [])

  async function handleRegister() {
    // await setDoc(doc(db, 'users', '3'), {
    //   nome: 'Jose',
    //   idade: '30',
    //   cargo: 'Fullstack'
    // })

    await addDoc(collection(db, 'users'), {
      nome: 'Sabrina',
      idade: '22',
      cargo: 'Estudante'
    })

  }

  return (
    <View style={styles.container}>
      <Text>NOME: {nome}</Text>

      <TouchableOpacity style={styles.btn} onPress={handleRegister} >
        <Text style={styles.btnText}>ADICIONAR</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  btn:{
    backgroundColor: '#000',
    alignSelf: 'flex-start',
  },
  btnText:{
    color: '#FFF',
    padding: 8,
  },
})
