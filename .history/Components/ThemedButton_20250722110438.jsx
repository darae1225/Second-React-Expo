import { Pressable, StyleSheet, Text, useColorScheme, View } from 'react-native'
import { Colors } from '../constants/Colors.js'

const ThemedButton= ({ style, ...props }) => {
  
  return (
    <Pressable 
    style={ ({ pressed }) => [styles.btn, pressed && styles.pressed ]} {...props} />
  )
}

export default ThemedButton

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 5,
    marginVertical: 10
  },
  pressed: {
    opacity: 0.8
  }
})