import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import logo_dark from '../assets/img/logo_dark.jpeg'

const Home = () => {
    
  return (
    <View style={styles.container}>
      <Image source={logo_dark} style={styles.img} ></Image>
      <Text style={styles.title}>Choose Therapy</Text>
      <Text style={{
        margin: 10,
        fontSize: 20
      }}>Welcome!</Text>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom:10
  },
  img: {
    marginVertical: 10,
  }
})