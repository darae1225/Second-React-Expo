import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { Colors } from '../constants/Colors.js'
import ThemedView from '../components/ThemedView.jsx'
import ThemedText from '../components/ThemedText.jsx'

const Contact = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Contact Us</ThemedText>
      <ThemedText style={styles.description}>Call us on 0430 522 850</ThemedText>
      <ThemedText style={styles.description}>www.choosetherapy.com.au</ThemedText>
      <ThemedText style={styles.description}>choosetherapy@gmail.com</ThemedText>
      
      <Link href="/" style={styles.link}>Back Home</Link>
    </ThemedView>
  )
}

export default Contact

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fbe8c2'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10
  },
  description: {
    textAlign: 'center',
    marginVertical: 5
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1
  }
})