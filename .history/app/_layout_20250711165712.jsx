import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot, Stack, Tabs } from 'expo-router'
//'Slot' allow to display index.jsx file with _layout.jsx file in the same folder
//'Stack' allow to display back button on the top of a screen  

const RootLayout = () => {
  return (
    <Stack screenOptions={{
      headerStyle: { backgroundColor: '#ddd'},
      headerTintColor: { backgroundColor: '#333'},

    }}>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="about" options={{ title: 'About' }} />
      <Stack.Screen name="contact" options={{ title: 'Contact Us' }} />
    </Stack> 
  )
}

export default RootLayout

const styles = StyleSheet.create({})