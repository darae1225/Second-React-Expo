import React from 'react'
import { StyleSheet } from 'react-native'

// themed components
import Spacer from '../../components/Spacer.jsx'
import ThemedView from '../../components/ThemedView.jsx'
import ThemedText from '../../components/ThemedText.jsx'

const Appointments = ( {style, ...props}) => {
  return (
    <ThemedView style={styles.container} safe={true}>
{/*       
      <Spacer /> */}
      <ThemedText title={true} style={styles.heading} >
        Your Appointment List</ThemedText>
      <Spacer />

      <ThemedText>
        Review your appointment...
      </ThemedText>

    </ThemedView>
  )
}

export default Appointments

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