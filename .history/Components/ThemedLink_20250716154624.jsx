import { Pressable, StyleSheet, Text, View, useColorScheme } from 'react-native'
import { Link } from 'expo-router';
import React from 'react'
import { Colors } from '../constants/Colors'

export default function ThemedLink({ style, href='/', ...props }) {

  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light
  const textColor = colorScheme === 'light' ? theme.title : theme.text;

  return (
        <Link 
          href={href}
          style={[styles.btn, style]}
          {...props}
        />
      )}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    textAlign: 'center',
    width: 300
  }
})