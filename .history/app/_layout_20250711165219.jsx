import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot, Stack, Tabs } from 'expo-router'
//'Slot' allow to display index.jsx file with _layout.jsx file in the same folder
//'Stack' allow to display back button on the top of a screen  

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: ''}} />
    </Stack> 
  )
}

export default RootLayout

const styles = StyleSheet.create({})