import { StyleSheet, useColorScheme } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'
import { Colors } from '../constants/Colors'

export default function ThemedLink({ style, href = '/', children, ...props }) {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light
  const textColor = colorScheme === 'light' ? theme.title : theme.text

  return (
    <Link
      href={href}
      style={({ pressed }) => [
        styles.btn,
        style,
        pressed && styles.linkButtonPressed
      ]}
      {...props}
    >
      {children}
    </Link>
  )
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    textAlign: 'center',
    width: 300,
    alignItems: 'center', // Ensures child text centers
    justifyContent: 'center',
  },
  linkButtonPressed: {
    backgroundColor: '#0051A8',
    transform: [{ scale: 0.97 }],
  }
})
