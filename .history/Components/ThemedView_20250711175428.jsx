import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import Colors from '../constants/Colors.js'
import React from 'react'

const ThemedView = () => {

  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light
  
  return (
    <View styles={[{
      backgroundColor: theme.background
    }]}>
      <Text>ThemedView</Text>
    </View>
  )
}

export default ThemedView

const styles = StyleSheet.create({})