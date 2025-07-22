import { StyleSheet, Text, TextInput, useColorScheme, View } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'

const ThemedTextInput = ({style, ...props}) => {
  const colorScheme= useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  return (

    <TextInput></TextInput>
  )
}

export default ThemedTextInput

const styles = StyleSheet.create({})