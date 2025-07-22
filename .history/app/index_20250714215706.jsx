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

      <ThemedButton>
        <ThemedText>Log In</ThemedText>
      </ThemedButton>

      <ThemedButton style={{width: '100'}}>
        <ThemedText>Register</ThemedText>
      </ThemedButton>


      <Link href='/login'  style={styles.link} >
        <ThemedText>Log In</ThemedText>
      </Link>

      <Link href='/register' style={styles.link}>
        <ThemedText>Register</ThemedText>
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
    borderBottomWidth:1
  }
})