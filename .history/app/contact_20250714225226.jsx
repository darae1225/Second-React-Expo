import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { Colors } from '../constants/Colors.js'
import ThemedView from '../components/ThemedView.jsx'
import ThemedText from '../components/ThemedText.jsx'
import ThemedLink from '../components/ThemedLink.jsx'
import Spacer from '../components/Spacer.jsx'

const Contact = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Contact Us</ThemedText>
      <ThemedText style={styles.description}>Call us on 0430 522 850</ThemedText>
      <ThemedText style={styles.description}>www.choosetherapy.com.au</ThemedText>
      <ThemedText style={styles.description}>choosetherapy@gmail.com</ThemedText>
      
      <Spacer />
      <ThemedLink>
        <ThemedText>Back Home</ThemedText>
      </ThemedLink>
    </ThemedView>
  )
}

export default Contact

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10
  },
  description: {
    textAlign: 'center',
    marginVertical: 5
  }
})