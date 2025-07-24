import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import { useAppointments } from '../../../hooks/useAppointments'

import Spacer from '../../../components/Spacer'
import ThemedText from '../../../components/ThemedText'
import ThemedCard from '../../../components/ThemedCard'
import ThemedView from '../../../components/ThemedView'
import ThemedButton from '../../../components/ThemedButton'

const AppointmentDetails = () => {
  const [ appointment, setAppointment ] = useState(null)
  const { id } = useLocalSearchParams()
  const { fetchAppointmentById } = useAppointments()

  useEffect(() => {
    async function loadAppointment() {
      const appointmentData = await fetchAppointmentById(id)
      setAppointment(appointmentData)
    }

    loadAppointment()
  }, [id])

  return (
    <ThemedView safe={true} style={styles.container}> 
      <ThemedText>Appointment Details - {id}</ThemedText>
    </ThemedView>
  )
}

export default AppointmentDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
})