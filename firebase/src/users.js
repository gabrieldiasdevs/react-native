
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { db } from './firebaseConnection'
import { deleteDoc, doc } from 'firebase/firestore'

export function UsersList({ data, handleEdit }){

  async function handleDeleteItem(){ 
    const docRef = doc(db, 'users', data.id)
    await deleteDoc(docRef)
  }

  function handleEditUser(){
    handleEdit(data);
  }


  return(
    <View style={styles.container}>
      <Text style={styles.item}>Nome: {data.nome}</Text>
      <Text style={styles.item}>Idade: {data.idade}</Text>
      <Text style={styles.item}>Cargo: {data.cargo}</Text>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity style={styles.button} onPress={handleDeleteItem}>
          <Text style={styles.buttonText}>Deletar usuario</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonEdit} onPress={handleEditUser}>
          <Text style={styles.buttonText}>Editar usuario</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#f0f0f0",
    padding: 8,
    borderRadius: 4,
    marginBottom: 14,
  },
  item:{
    color: "#000",
    fontSize: 16,
  },
  button:{
    backgroundColor: "#B3261E",
    alignSelf: "flex-start",
    padding: 4,
    borderRadius: 4,
    marginTop: 16
  },
  buttonText: {
    color: "#FFF",
    paddingLeft: 8,
    paddingRight: 8,
  },
  buttonEdit:{
    backgroundColor: "#000",
    alignSelf: "flex-start",
    padding: 4,
    borderRadius: 4,
    marginTop: 16
  }
})