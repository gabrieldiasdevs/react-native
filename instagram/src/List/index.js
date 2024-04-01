import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default function List(props) {

  function curtidas(likers) {
    if(likers === 0) {
      return
    } else if(likers === 1) {
      return <Text style={styles.likes}>1 curtida</Text>
    } else {
      return <Text style={styles.likes}>{likers} curtidas</Text>
    }
  }

 return (
  <View>

    <View style={styles.viewPerfil}>
      <Image
      style={styles.fotoPerfil}
      source={{ uri: props.data.imgperfil }}
      />
      <Text style={styles.nomeUsuario}> {props.data.nome} </Text>
    </View>

    <Image
    style={styles.publicacao}
    source={{ uri: props.data.imgPublicacao }}
    resizeMode='cover'
    />

    <View style={styles.areaBtn}>
      <TouchableOpacity>
        <Image
        style={styles.iconeLike}
        source={ props.data.likeada ? require('../img/likeada.png') : require('../img/like.png') }
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnSend}>
        <Image
        style={styles.iconeLike}
        source={ require('../img/comment.png') }
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnSend}>
        <Image
        style={styles.iconeLike}
        source={ require('../img/send.png') }
        />
      </TouchableOpacity>

    </View>
    
    {curtidas(props.data.likers)}

    <Text style={styles.nomeRodape}>
      {props.data.nome}
    </Text>

    <Text style={styles.descRodape}>
      {props.data.descricao}
    </Text>

  </View>
  )
}

const styles = StyleSheet.create({
  viewPerfil:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  fotoPerfil:{
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  nomeUsuario:{
    paddingLeft: 5,
    fontSize: 22,
    color: '#000'
  },
  publicacao:{
    height: 400,
    alignItems: 'center',
  },
  areaBtn:{
    flexDirection: 'row',
    padding: 5,
  },
  iconeLike:{
    width: 25,
    height: 25,
  },
  btnSend:{
    paddingLeft: 5,
  },
  likes:{
    fontWeight: 'bold',
    marginLeft: 5,
  },
  nomeRodape:{
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 5
  },
  descRodape:{
    paddingLeft: 5,
    paddingBottom: 10,
    fontSize: 15
  }
})