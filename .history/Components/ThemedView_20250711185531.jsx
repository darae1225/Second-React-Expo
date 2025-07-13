import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import { Colors } from '../constants/Colors.js'
import React from 'react'

const ThemedView = ({ style, ...props }) => {

  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light
  
  return (
    <View styles={[{ backgroundColor: theme.background }, style ]} {...props} />
  )
}

export default ThemedView

const styles = StyleSheet.create({})