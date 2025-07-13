import { StyleSheet, Image, Text, useColorScheme, View } from 'react-native'
import DarkLogo from '../assets/img/logo_dark.jpeg'
import LightLogo from '../assets/img/logo_light.jpeg'
import React from 'react'

const ThemedLogo = ({ style, ...props }) => {

  const colorScheme = useColorScheme()
  const logo = colorScheme === 'dark' ? DarkLogo : LightLogo
  
  return (
    <Image source={logo} {...props}/>
  )
}

export default ThemedLogo

const styles = StyleSheet.create({

})

