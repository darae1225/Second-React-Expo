import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import logo_dark from '../assets/img/logo_dark.jpeg'
import { Link } from 'expo-router'

const Home = () => {
    
  return (
    <View style={styles.container}>
      <Image source={logo_dark} style={styles.img} ></Image>
      <Text style={styles.title}>Choose Therapy</Text>
      <Text style={{
        fontSize: 20
      }}>Welcome!</Text>
      <Link href="/about" style={styles.link}>About Choose Therapy</Link>
      <Link href="/contact" style={styles.link}>Contact Us</Link>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(44, 62, 80)'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25
  },
  img: {
    marginVertical: 10,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth:1
  }
})