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
        <Tabs.Screen 
          name="profile" 
          options={{ title:'PROFILE', tabBarIcon: ({ focused }) => (
          <Ionicons     
            size={24} 
            name={ focused ? 'person' : 'person-outline'}
            />)
          }}/>
        <Tabs.Screen name="book" options={{title:'BOOK', tabBarIcon:({ focused }) => ( <Ionicons size={24} name={ focused ? 'calendar' : 'calendar-outline' }/>)}}/>
        <Tabs.Screen name="appointments" options={{title:'MY APPOINTMENT', tabBarIcon: () => (<Ionicons size={24} name="time-outline"/>)}}/>
      </Tabs>
    </>
  )
}

export default DashboardLayout

const styles = StyleSheet.create({})