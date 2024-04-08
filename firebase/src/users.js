import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

export function UserList({ data }) {

  function handleDeleteItem() {
    
  }

  return(
    <View style={styles.container}>
      <Text style={styles.item}>Nome: {data.nome}</Text>
      <Text style={styles.item}>Idade: {data.idade}</Text>
      <Text style={styles.item}>Cargo: {data.cargo}</Text>
      <TouchableOpacity style={styles.btn} onPress={handleDeleteItem} >
        <Text style={styles.btnText}>Deletar Usuário</Text>
      </TouchableOpacity>
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