import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import * as ImagePicker from 'expo-image-picker'

export default function App() {
  const [photo, setPhoto] = useState(null)

  async function openAlbum(){

    let result = await ImagePicker.launchImageLibraryAsync({
      quality: 1,
    })

    if (!result.canceled) {
      console.log(result)
      setPhoto(result.assets[0].uri)
    } else {
      alert('You did not select any image.');
    }

  }

  async function openCamera(){

    const options = {
      quality: 1,
    }
    
    const response = await ImagePicker.launchCameraAsync(options)

    setPhoto(response.assets[0].uri)

  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={openAlbum}>
          <Text style={styles.text}>Abrir Album</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={openCamera}>
          <Text style={styles.text}>Abrir Camera</Text>
        </TouchableOpacity>
      </View>

      {photo !== null && (
        <Image
          source={{ uri: photo }}
          style={styles.image}
        />
      )}
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
    marginBottom: 24,
  },
  button:{
    backgroundColor: '#121212',
    padding: 4,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  text:{
    color: '#FFF',
  },
  image:{
    width: '90%',
    height: 300,
    objectFit: 'cover',
  }
})