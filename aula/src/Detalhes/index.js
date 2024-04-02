import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';

export default function Detalhes(props) {
  return (
    <View style={styles.container}>

			<View style={styles.modal}>
				<Text style={styles.titulo}>Seja bem vindo!</Text>
      	<Button title='FECHAR' onPress={ props.fechar } />
			</View>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    margin: 15,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
	modal:{
		backgroundColor: '#292929',
		width: '100%',
		height: 350,
		borderRadius: 5,
	},
	titulo:{
		fontSize: 25,
		color: '#FFF',
		textAlign: 'center',
		padding: 20,
	}
})