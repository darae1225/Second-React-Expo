import { Image, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { Colors } from '../constants/Colors.js'

// themed components
import Spacer from '../components/Spacer.jsx'
import ThemedView from '../components/ThemedView.jsx'
import ThemedLogo from '../components/ThemedLogo.jsx'
import ThemedText from '../components/ThemedText.jsx'
import ThemedButton from '../components/ThemedButton.jsx'


const Home = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light
  const textColor = theme === 'light' ? theme.light.text : theme.dark.text

  return (
    <ThemedView style={styles.container}>
      <ThemedLogo />
      <Spacer height={20} />
      <ThemedText style={styles.title} title={true} >Choose Therapy</ThemedText>
      
      <Spacer  height={50} />
      <ThemedText style={{ fontSize: 20 }}>Welcome!</ThemedText>
      <Spacer  height={50} />
      
        
      <Link href="/about" style={styles.link}>
        <ThemedText>About Choose Therapy</ThemedText>
      </Link>

      <Link href="/contact" style={styles.link}>
        <ThemedText>Contact Us</ThemedText>
      </Link>

      <Spacer height={70}/>
      <Link href='/login' style={styles.btn}>
        <ThemedText style={styles.btnText}>Login</ThemedText>
      </Link>

      <Link href='/register' style={styles.btn}>
        <ThemedText style={styles.btnText}>Register</ThemedText>
      </Link>

      <Link href='/profile' style={styles.link}>
        <ThemedText>Profile</ThemedText>
      </Link>

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
  link: {
    marginVertical: 10,
    borderBottomWidth:1,
  },
  btn: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    textAlign: 'center',
    width: 200
  }
})