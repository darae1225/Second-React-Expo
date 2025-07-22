import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { Colors } from '../constants/Colors.js'

import ThemedView from '../components/ThemedView.jsx'
import ThemedText from '../components/ThemedText.jsx'
import ThemedLink from '../components/ThemedLink.jsx'
import Spacer from '../components/Spacer.jsx'


const About = () => {
  
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  return (
    <ThemedView style={[styles.container, { backgroundColor: theme.background }]}>
      <ThemedText title={true} style={[styles.title, { color: theme.title }]}>About Page</ThemedText>
      
      <Spacer />
      
      <ThemedText style={[styles.description]}>Choose Therapy is a Perth based occupational therapy service, found by Jerome Choo.</ThemedText>
      
      <Spacer />
      
      <Link href="/" style={[styles.link, {color: theme.title}]}>
        <ThemedText>Back Home</ThemedText>
      </Link>

      <ThemedLink>
        <ThemedText>hello</ThemedText>hello</ThemedLink>
    </ThemedView>
  )
}

export default About

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18
  },
  description: {
    textAlign: 'center'
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1
  }
})