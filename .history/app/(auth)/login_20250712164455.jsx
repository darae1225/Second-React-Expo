import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

//Themed components
import ThemedView from '.../components/ThemedView.jsx'
import ThemedText from '../components/ThemedText.jsx'
import Spacer from '../components/Spacer.jsx'


const login = () => {
  return (
    <ThemedView>
      <Spacer />
      <ThemedText> Login to Your Account </ThemedText>
    </ThemedView>
  )
}

export default login

const styles = StyleSheet.create({})