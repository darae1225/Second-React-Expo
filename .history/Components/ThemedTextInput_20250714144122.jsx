import { StyleSheet, Text, TextInput, useColorScheme, View } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'

const ThemedTextInput = ({style, ...props}) => {
  const colors = useColorScheme()
  const theme = Colors[colors] === 'dark' ? theme.dark : theme.light

  console.log(colors, theme)
  
  return (

    <TextInput></TextInput>
  )
}

export default ThemedTextInput

const styles = StyleSheet.create({})