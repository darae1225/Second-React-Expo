import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import { Colors } from '../constants/Colors.js'
import React from 'react'

const ThemedCard = ({ style, ...props }) => {

  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light
  
  return (
    <View style={[{ backgroundColor: theme.background }, styles.card, style ]}
    {...props} 
    />
  )
}

export default ThemedCard

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    padding: 20
  }
})