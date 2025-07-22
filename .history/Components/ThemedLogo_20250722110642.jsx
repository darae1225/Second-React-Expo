import React from 'react'
import { StyleSheet, Image, useColorScheme } from 'react-native'
import DarkLogo from '../assets/img/DarkLogo.png'
import LightLogo from '../assets/img/LightLogo.jpeg'


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

