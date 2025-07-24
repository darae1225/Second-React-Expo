import React, { useEffect, useState } from 'react'
import { StyleSheet, Text } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import { useAppointments } from '../../../hooks/useAppointments'

import Spacer from '../../../components/Spacer'
import ThemedText from '../../../components/ThemedText'
import ThemedCard from '../../../components/ThemedCard'
import ThemedView from '../../../components/ThemedView'
import ThemedLoader from '../../../components/ThemedLoader'
import ThemedButton from '../../../components/ThemedButton'

const AppointmentDetails = () => {
  const [ appointment, setAppointment ] = useState(null)
  const { id } = useLocalSearchParams()

  const { fetchAppointmentById } = useAppointments()

  useEffect(() => {

    async function loadAppointment () {
      const appointmentData = await fetchAppointmentById(id)
      setAppointment(appointmentData)
    }

    if (id) loadAppointment()

  }, [id])

  if(!appointment) {
    return (
    <ThemedView safe={true} style={styles.container}>
      <ThemedLoader />
    </ThemedView>
    )
  }

  return (

    <ThemedView safe={true} style={styles.container}>
      <ThemedCard>
        <ThemedText style={styles.title}> {appointment.name}</ThemedText>
        <ThemedText>Date is {new Date(appointment.date).toLocaleString()}</ThemedText>
        <Spacer />

        <ThemedText title={true}>Appointment descriptionn: </ThemedText>
        <Spacer height={10}/>

        <ThemedText>Functional Capacity Assessment (30 minutes) </ThemedText>
      </ThemedCard>

      <ThemedButton style={styles.delete}>
        <Text style={{ color: '#fff', textAlign: 'center' }}> Remove </Text>
      </ThemedButton>
    </ThemedView>
  )
}

export default AppointmentDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    marginVertical: 10
  },
  card: {
    margin: 20
  }
})