import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import { db } from './src/firebaseConnection'
import { doc, getDoc, onSnapshot, setDoc, collection, addDoc } from 'firebase/firestore'

export default function App() {

  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  const [cargo, setCargo] = useState('')
  const [showForm, setShowForm] = useState(true)

  useEffect(() => {

     async function getDados() {

    // onSnapshot(doc(db, 'users', '1'), (doc) => {
    //   setNome(doc.data()?.nome)
    // })
  
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

      <TouchableOpacity style={styles.btn} onPress={handleRegister} >
        <Text style={styles.btnText}>ADICIONAR</Text>
      </TouchableOpacity>
        </View>
      )}

      <TouchableOpacity onPress={handleToggle} >
        <Text style={{ textAlign:"center", color: "#000" }}>
          {showForm ? "Esconder formulário" : "Mostrar formulário"}
        </Text>
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
  }
})
