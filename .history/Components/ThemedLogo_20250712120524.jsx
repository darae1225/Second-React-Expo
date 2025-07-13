import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import { Colors } from '../constants/Colors.js'
import React from 'react'

const ThemedLogo = ({ style, ...props }) => {

  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light
  
  return (
    <View style={[{ backgroundColor: theme.uiBackground }, styles.Logo, style ]}
    {...props} 
    />
  )
}

export default ThemedLogo

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    padding: 20
  }
})