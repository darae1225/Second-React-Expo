import React from 'react'
import { StyleSheet } from 'react-native'
import {useAppointments } from '../../hooks/useAppointments'
import { Colors } from 'react-native/Libraries/NewAppScreen'

// themed components
import Spacer from '../../components/Spacer'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import ThemedCard from '../../components/ThemedCard'

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