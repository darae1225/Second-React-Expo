import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import Colors from '../constants/Colors.js'
import React from 'react'

const ThemedView = () => {

  const colors = useColorScheme()
  const theme = colors[colors] ?? colors.light
  
  return (
    <View>
      <Text>ThemedView</Text>
    </View>
  )
}

export default ThemedView

const styles = StyleSheet.create({})