import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList } from 'react-native'
import { db } from './src/firebaseConnection'
import { doc, getDoc, onSnapshot, setDoc, collection, addDoc, getDocs, updateDoc } from 'firebase/firestore'

import { UserList } from './src/users'

export default function App() {

  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  const [cargo, setCargo] = useState('')
  const [showForm, setShowForm] = useState(true)

  const [users, setUsers] = useState([])
  const [isEditing, setIsEditing] = useState('')

  useEffect(() => {

    async function getDados() {

    const usersRef = collection(db, 'users')

    onSnapshot(usersRef, (snapshot) => {
      let lista = []

      snapshot.forEach((doc) => {
        lista.push({
          id: doc.id,
          nome: doc.data().nome,
          idade: doc.data().idade,
          cargo: doc.data().cargo
        })
      })
      
      setUsers(lista)

    })

  }

    getDados()

  }, [])

  async function handleRegister() {

    await addDoc(collection(db, 'users'), {
      nome: nome,
      idade: idade,
      cargo: cargo
    })
    .then(() => {
      setNome('')
      setIdade('')
      setCargo('')
    })
    .catch((err) => {
      console.log(err)
    })

  }

  function handleToggle() {
    setShowForm(!showForm)
  }

  function editUser(data) {
    setNome(data.nome)
    setIdade(data.idade)
    setCargo(data.cargo)
    setIsEditing(data.id)
  }

  async function handleEditUser() {
    const docRef = doc(db, 'users', isEditing)
    await updateDoc(docRef, {
      nome: nome,
      idade: idade,
      cargo: cargo
    })
    setIsEditing('')
    setNome('')
    setIdade('')
    setCargo('')
  }

  return (
    <View style={styles.container}>
      { showForm && (
        <View>
          <Text style={styles.label}>Nome: </Text>
      <TextInput
        style={styles.input}
        placeholder='Digite seu nome...'
        value={nome}
        onChangeText={ (texto) => setNome(texto) }
      />

      <Text style={styles.label}>Idade: </Text>
      <TextInput
        style={styles.input}
        placeholder='Digite sua idade...'
        value={idade}
        onChangeText={ (texto) => setIdade(texto) }
      />

      <Text style={styles.label}>Cargo: </Text>
      <TextInput
        style={styles.input}
        placeholder='Digite o seu cargo...'
        value={cargo}
        onChangeText={ (texto) => setCargo(texto) }
      />

      {isEditing !== '' ? (
        <TouchableOpacity style={styles.btn} onPress={handleEditUser} >
          <Text style={styles.btnText}>Editar</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.btn} onPress={handleRegister} >
          <Text style={styles.btnText}>Adicionar</Text>
        </TouchableOpacity>
      )}

        </View>
      )}

      <TouchableOpacity onPress={handleToggle} >
        <Text style={{ textAlign:"center", color: "#000" }}>
          {showForm ? "Esconder formulário" : "Mostrar formulário"}
        </Text>
      </TouchableOpacity>


      <Text style={{ marginLeft: 8, marginTop: 14, fontSize: 20, color: '#000' }}>
        Usuários
      </Text>

      <FlatList
        style={styles.list}
        data={users}
        keyExtractor={ (item) => String(item.id) }
        renderItem={ ({ item }) => <UserList data={item} handleEdit={ (item) => editUser(item) } /> }
      />


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
    marginHorizontal: 8,
  },
  btnText:{
    color: '#FFF',
    padding: 8,
    textAlign: 'center',
  },
  label:{
    color: '#000',
    fontSize: 18,
    marginBottom: 4,
    marginLeft: 8,
  },
  input:{
    borderWidth: 1,
    marginHorizontal: 8,
    marginBottom: 8,
    padding: 10,
  },
  list:{
    marginTop: 8,
    marginHorizontal: 8,
  }
})
