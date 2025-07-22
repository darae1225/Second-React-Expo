
import { StyleSheet, Text, TextInput, useColorScheme, View } from 'react-native'

import { Colors } from '../constants/Colors'

const ThemedTextInput = ({style, ...props}) => {
  const colorScheme= useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  return (
    <TextInput
      style={[
        {
          backgroundColor: theme.uiBackground,
          textColor: theme.text,
          padding: 20,
          borderRadius: 6
        },
        style
      ]}
      {...props}
    />
  )
}

export default ThemedTextInput

const styles = StyleSheet.create({})