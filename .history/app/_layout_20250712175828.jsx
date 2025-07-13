import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Slot, Stack, Tabs } from 'expo-router'
//'Slot' allow to display index.jsx file with _layout.jsx file in the same folder
//'Stack' allow to display back button on the top of a screen 
import { Colors } from '../constants/Colors.js'
import { StatusBar } from 'expo-status-bar'
// 'StatusBar' update colour of time and battery status bar on the screen 

const RootLayout = () => {

  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light
  
  return (
    <>
      <StatusBar value="auto" /> 
      <Stack screenOptions={{
        headerStyle: { backgroundColor: theme.navBackground },
        headerTintColor: theme.title
      }}>
        <Stack.Screen name="(auth)" options={{ headerShown: false }}/>
        <Stack.Screen name="(dashboard)" options={{ headerShown: false }}/>
        <Stack.Screen name="index" options={{ title: 'Home' }} />
        <Stack.Screen name="about" options={{ title: 'About' }} />
        <Stack.Screen name="contact" options={{ title: 'Contact Us' }} />
      </Stack>
    </>
  )
}

export default RootLayout

const styles = StyleSheet.create({})