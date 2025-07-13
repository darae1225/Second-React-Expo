import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Slot, Stack, Tabs } from 'expo-router'

import { Colors } from '../../constants/Colors.js'
import { StatusBar } from 'expo-status-bar'

const DashboardLayout = () => {

  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light
  
  return (
    <>
      <StatusBar value="auto" /> 
        <Stack screenOptions={{ headerShown: false, animation: "none" }} >
        </Stack>
    </>
  )
}

export default DashboardLayout

const styles = StyleSheet.create({})