import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const About = () => {
  return (
    <View style={styles.container}>
      <Text>about</Text>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold'
  }
})