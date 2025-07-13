import { StyleSheet, Image, Text, useColorScheme, View } from 'react-native'
import DarkLogo from '../assets/img/DarkLogo.png'
import LightLogo from '../assets/img/LightLogo.jpeg'
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

