import { Pressable, StyleSheet, Text, View, useColorScheme } from 'react-native'
import { Link } from 'expo-router';
import React from 'react'
import { Colors } from '../constants/Colors'

export default function ThemedLink({ style, children, href='/', ...props }) {

  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light
  const textColor = colorScheme === 'light' ? theme.title : theme.text;

  return (
    <Pressable>
      {({ pressed }) => (
        <Link
          href={href}
          style={({ pressed: linkPressed }) => [
            style,
            (pressed || linkPressed) && { opacity: 0.6 }, // fallback
          ]}
          {...props}
        >
          {typeof children === 'function' ? children({ pressed }) : children}
        </Link>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    textAlign: 'center',
    width: 300
  },
  btnPressed: {
    opacity: 0.6,
    transform: [{ scale: 0.98 }],
  }
})