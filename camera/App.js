import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import * as ImagePicker from 'expo-image-picker'

export default function App() {

  async function openAlbum(){

    let result = await ImagePicker.launchImageLibraryAsync({
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result);
    } else {
      alert('You did not select any image.');
    }

  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={openAlbum}>
          <Text style={styles.text}>Abrir Album</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Abrir Camera</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  buttons:{
    flexDirection: 'row',
    marginTop: 44,
    gap: 14,
  },
  button:{
    backgroundColor: '#121212',
    padding: 4,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  text:{
    color: '#FFF',
  }
})