import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Slot, Stack, Tabs } from 'expo-router'
//'Slot' allow to display index.jsx file with _layout.jsx file in the same folder
//'Stack' allow to display back button on the top of a screen 
import { Colors } from '../constants/Colors.js'
import { StatusBar } from 'expo-status-bar'
// 'StatusBar' update colour of time and battery status bar on the screen 

const AuthLayout = () => {

  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light
  
  return (
    <>
      <StatusBar value="auto" /> 
        <Stack screenOptions={{
          headerStyle: { backgroundColor: theme.navBackground },
          headerTintColor: theme.title
        }} / >
    </>
  )
}

export default RootLayout

const styles = StyleSheet.create({})