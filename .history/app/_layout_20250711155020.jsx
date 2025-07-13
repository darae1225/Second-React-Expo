import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router' //allow to display index.jsx file with _layout.jsx file in the same folder 

const RootLayout = () => {
  return (
    <View style={{ flex: 1 }}>
      <Stack /> 
      <Text>Footer</Text>
    </View>
  )
}

export default RootLayout

const styles = StyleSheet.create({})