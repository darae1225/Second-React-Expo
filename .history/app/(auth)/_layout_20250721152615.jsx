import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Slot, Stack, Tabs } from 'expo-router'

import { Colors } from '../../constants/Colors.js'
import { StatusBar } from 'expo-status-bar'
import { useUser } from '../../hooks/useUser.jsx'
import GuestOnly from '../../components/GuestOnly.jsx'


const AuthLayout = () => {

  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light
  
  const { user } = useUser()
  console.log('currently user logged in is ' + user)
  
  return (
    <GuestOnly>
      <StatusBar value="auto" /> 
        <Stack screenOptions={{ headerShown: false, animation: "none" }} >
          <Stack.Screen name="login" options={{ title: 'Login'}}/>
          <Stack.Screen name="register" options={{ title: 'Register'}}/>
        </Stack>
    </GuestOnly>
  )
}

export default AuthLayout

const styles = StyleSheet.create({})