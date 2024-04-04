import { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'

import { PickerItem } from './src/Picker'
import { api } from './src/services/api'

export default function App() {

  const [moedas, setMoedas] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadMoedas() {
      const response = await api.get('all')
      
      let arrayMoedas = []
      Object.keys(response.data).map( (key) => {
        arrayMoedas.push({
          key: key,
          label: key,
          value: key,
        })
      })

      setMoedas(arrayMoedas)
      setLoading(false)

    }

    loadMoedas()

  }, [])

  if(loading) {
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#101215' }}>
        <ActivityIndicator color='#fff' size='large' />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.areaMoeda}>
        <Text style={styles.titulo}>Selecione sua moeda</Text>
        <PickerItem/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101215',
    paddingTop: 40,
    alignItems: 'center',
  },
  areaMoeda:{
    backgroundColor: '#f9f9f9',
    width: '90%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    padding: 8,
  },
  titulo:{
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
    paddingLeft: 5,
    paddingTop: 5,
  }
})
