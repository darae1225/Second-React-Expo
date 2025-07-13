import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

// themed components
import ThemedView from '../../components/ThemedView.jsx'
import ThemedLogo from '../../components/ThemedLogo.jsx'
import ThemedText from '../../components/ThemedText.jsx'
import Spacer from '../../components/Spacer.jsx'

const Book = ( {style, ...props}) => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText title={true} style={styles.heading}> Book Your Appointment </ThemedText>
      <Spacer />
    </ThemedView>
  )
}

export default Book

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center'
  }
})