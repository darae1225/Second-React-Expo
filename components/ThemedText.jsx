import React from 'react'
import { StyleSheet, Text, useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors.js'


const ThemedText = ({ style, title = false, ...props }) => {

  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  const textColor = title ? theme.title : theme.text
  
  return (
    <Text style={[{ color: textColor }, style ]} {...props} />
  )
}

export default ThemedText

const styles = StyleSheet.create({})