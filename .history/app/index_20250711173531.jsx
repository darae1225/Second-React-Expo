import { Image, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import logo_dark from '../assets/img/logo_dark.jpeg'
import logo_light from '../assets/img/logo_light.png'
import { Link } from 'expo-router'
import Colors from '../constants/Colors.js'

const Home = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  return (
    <View style={styles.container}>
      <Image source={logo_light} style={styles.img} ></Image>
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
    backgroundColor: '#fbe8c2'
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