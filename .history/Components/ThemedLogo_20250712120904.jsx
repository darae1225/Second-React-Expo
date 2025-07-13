import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import { Colors } from '../constants/Colors.js'
import DarkLogo from '../assets/img/logo_dark.jpeg'
import LightLogo from '../assets/img/logo_light.png'
import React from 'react'

const ThemedLogo = ({ style, ...props }) => {

  const colorScheme = useColorScheme()
  const logo = colorScheme === 'dark' ? DarkLogo : LightLogo
  
  return (
    <Image source={logo} />
  )
}

export default ThemedLogo

const styles = StyleSheet.create({})

