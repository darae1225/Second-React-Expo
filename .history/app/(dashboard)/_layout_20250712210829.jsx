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
      <Tabs screenOptions={{ headerShown: false, tabBarStyle: {
        backgroundColor: theme.navBackground,
        paddingTop: 10,
        height: 90
      },
      tabBarActiveTintColor: theme.iconColorFocused,
      tabBarInactiveTintColor: theme.iconColor
      }}>
        <Tabs.Screen name="appointments"></Tabs.Screen>
      </Tabs>
    </>
  )
}

export default DashboardLayout

const styles = StyleSheet.create({})