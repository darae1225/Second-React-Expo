import { Image, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import DarkLogo from '../assets/img/DarkLogo.png'
import LightLogo from '../assets/img/LightLogo.jpeg'
import { Link } from 'expo-router'
import { Colors } from '../constants/Colors.js'

// themed components
import ThemedView from '../components/ThemedView.jsx'
import ThemedLogo from '../components/ThemedLogo.jsx'
import Spacer from '../components/Spacer.jsx'

const Home = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  return (
    <ThemedView style={styles.container}>
      <ThemedLogo style={styles.img} />

      <Text style={styles.title}>Choose Therapy</Text>
      
      <Spacer width="100%" height="10" />

      <Text style={{
        fontSize: 20
      }}>Welcome!</Text>
      
      <Link href="/about" style={styles.link}>About Choose Therapy</Link>
      <Link href="/contact" style={styles.link}>Contact Us</Link>
    </ThemedView>
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