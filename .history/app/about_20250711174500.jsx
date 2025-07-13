import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import Colors from '../constants/Colors.js'

const About = () => {
  
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.title }]}>About Page</Text>
      <Text style={[styles.description, {color: theme.title}]}>Choose Therapy is a Perth based occupational therapy service, found by Jerome Choo.</Text>
      <Link href="/" style={styles.link}>Back Home</Link>
    </View>
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