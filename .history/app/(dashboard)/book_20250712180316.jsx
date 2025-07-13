import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

// themed components
import ThemedView from '../../components/ThemedView.jsx'
import ThemedLogo from '../../components/ThemedLogo.jsx'
import ThemedText from '../../components/ThemedText.jsx'
import Spacer from '../../components/Spacer.jsx'

const Book = () => {
  return (
    <ThemedView>
      <ThemedText> Book Your Appointment </ThemedText>
    </ThemedView>
  )
}

export default Book

const styles = StyleSheet.create({})