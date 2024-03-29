import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

function Pessoa(props) {
    return (
    <View style={styles.date}>
      <Text style={styles.dateText}>Nome: {props.nome} </Text>
      <Text style={styles.dateText}>Cargo: {props.cargo} </Text>
    </View>
  );
}

export default Pessoa


const styles = StyleSheet.create({
  date:{
    backgroundColor: '#131744',
    height: 200,
    justifyContent: 'center',
  },
  dateText:{
    marginLeft: 15,
    color: '#FFF',
    fontSize: 25,
  }
})