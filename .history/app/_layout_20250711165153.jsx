import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot, Stack, Tabs } from 'expo-router' 
import { Header } from 'react-native/Libraries/NewAppScreen'
//'Slot' allow to display index.jsx file with _layout.jsx file in the same folder
//'Stack' allow to display back button on the top of a screen  

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={ Header} />
    </Stack> 
  )
}

export default RootLayout

const styles = StyleSheet.create({})