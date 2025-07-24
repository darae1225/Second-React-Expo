import React from 'react'
import { StyleSheet, useColorScheme } from 'react-native'
import { Tabs } from 'expo-router'
import { Colors } from '../../constants/Colors.js'
import { Ionicons } from '@expo/vector-icons'
import UserOnly from '../../components/UserOnly.jsx'

const DashboardLayout = () => {

  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  
  return (
    <UserOnly>
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
            color={ focused ? theme.iconColorFocused : theme.iconColor}
          />)
          }}/>
        <Tabs.Screen 
          name="book" 
          options={{title:'BOOK', tabBarIcon:({ focused }) => (
          <Ionicons 
            size={24} 
            name={ focused ? 'calendar' : 'calendar-outline'}
            color={ focused ? theme.iconColorFocused : theme.iconColor}
          />)
          }}/>
        <Tabs.Screen 
          name="appointments" 
          options={{title:'MY APPOINTMENT', tabBarIcon: ({ focused }) => (
          <Ionicons 
            size={24} 
            name={ focused ? 'time' :'time-outline'}
            color={ focused ? theme.iconColorFocused : theme.iconColor}
          />)
          }}/>
          <Tabs.Screen 
          name="appointments/[id]" 
          options={{ href: null }}
          />
      </Tabs>
    </UserOnly>
  )
}

export default DashboardLayout

const styles = StyleSheet.create({})