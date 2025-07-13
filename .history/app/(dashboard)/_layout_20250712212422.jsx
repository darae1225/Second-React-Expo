import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Slot, Stack, Tabs } from 'expo-router'
import { Colors } from '../../constants/Colors.js'
import { StatusBar } from 'expo-status-bar'
import { Ionicons } from '@expo/vector-icons'

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
        <Tabs.Screen name="profile" options={{title:'PROFILE', tabBarIcon: () => (<Ionicons size={24} name="person" />) }}/>
        <Tabs.Screen name="book" options={{title:'BOOK', tabBarIcon:() => ( <Ionicons size={24} name="calendar-outline"/>)}}/>
        <Tabs.Screen name="appointments" options={{title:'MY APPOINTMENT', tabBarIcon: () => (<Ionicons />)}}/>
      </Tabs>
    </>
  )
}

export default DashboardLayout

const styles = StyleSheet.create({})