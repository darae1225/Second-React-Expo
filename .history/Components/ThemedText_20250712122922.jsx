import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import { Colors } from '../constants/Colors.js'
import React from 'react'

const ThemedText = ({ style, ...props }) => {

  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light
  
  return (
    <View style={[{ backgroundColor: theme.background }, style ]}
    {...props} 
    />
  )
}

export default ThemedText

const styles = StyleSheet.create({})