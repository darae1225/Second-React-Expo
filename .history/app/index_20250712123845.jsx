import { Image, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { Colors } from '../constants/Colors.js'

// themed components
import ThemedView from '../components/ThemedView.jsx'
import ThemedLogo from '../components/ThemedLogo.jsx'
import Spacer from '../components/Spacer.jsx'
import ThemedText from '../components/ThemedText.jsx'

const Home = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  return (
    <ThemedView style={styles.container}>
      <ThemedLogo />
      <Spacer height={20} />

      <ThemedText style={styles.title} title={true} >Choose Therapy</ThemedText>
      
      <Spacer  height={10} />
      <ThemedText style={{ fontSize: 20 }}>Welcome!</ThemedText>
      <Spacer  height={10} />
      
      <Link href="/about" style={styles.link}>
        <ThemedText> Choose Therapy </ThemedText>
        </Link>
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
  link: {
    marginVertical: 10,
    borderBottomWidth:1
  }
})