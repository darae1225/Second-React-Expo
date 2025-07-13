import { Pressable, StyleSheet, Text, useColorScheme, View } from 'react-native'
import { Colors } from '../constants/Colors.js'
import React from 'react'

const ThemedText = ({ style, ...props }) => {
  
  return (
    <Pressable 
    style={({ pressed }) = [styles.btn, pressed && styles.pressed ]} {...props} />
  )
}

export default ThemedText

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 5,
    marginVertical: 10
  },
  pressed: {
    opacity: 0.8
  }
})