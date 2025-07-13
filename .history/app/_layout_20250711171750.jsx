import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Slot, Stack, Tabs } from 'expo-router'
//'Slot' allow to display index.jsx file with _layout.jsx file in the same folder
//'Stack' allow to display back button on the top of a screen 
import Colors from '../constants/Colors.js'

const RootLayout = () => {

  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light
  console.log(theme)
  

  return (
    <Stack screenOptions={styles.stack}>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="about" options={{ title: 'About' }} />
      <Stack.Screen name="contact" options={{ title: 'Contact Us' }} />
    </Stack> 
  )
}

export default RootLayout

const styles = StyleSheet.create({
  stack: {
    headerStyle: {
      backgroundColor: '#fbe8c2'
    },
    headerTintColor: {
      backgroundColor: '#ddd'
    }
  }
})