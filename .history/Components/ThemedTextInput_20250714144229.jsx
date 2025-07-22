import { StyleSheet, Text, TextInput, useColorScheme, View } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'

const ThemedTextInput = ({style, ...props}) => {
  const colorsScheme= useColorScheme()
  const theme = Colors[colorScheme] === 'dark' ? colorsScheme.dark : colorsScheme.light

  return (

    <TextInput></TextInput>
  )
}

export default ThemedTextInput

const styles = StyleSheet.create({})