import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { db } from './firebaseConnection'
import { deleteDoc, doc } from 'firebase/firestore'

export function UserList({ data, handleEdit }) {

  async function handleDeleteItem() {
    const docRef = doc(db, 'users', data.id)
    await deleteDoc(docRef)
  }

  async function handleEditUser() {
    handleEdit(data)
  }

  return(
    <View style={styles.container}>
      <Text style={styles.item}>Nome: {data.nome}</Text>
      <Text style={styles.item}>Idade: {data.idade}</Text>
      <Text style={styles.item}>Cargo: {data.cargo}</Text>
      
      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn} onPress={handleDeleteItem} >
          <Text style={styles.btnText}>Deletar Usuário</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.btn, { backgroundColor: '#313131' }]} onPress={handleEditUser} >
          <Text style={styles.btnText}>Editar Usuário</Text>
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
    color: '#000',
    fontSize: 16,
  },
  btnArea:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn:{
    backgroundColor: '#b3261e',
    alignSelf: 'flex-start',
    padding: 4,
    borderRadius: 4,
    marginTop: 12,
  },
  btnText:{
    color: '#FFF',
    paddingHorizontal: 8,
  }
})