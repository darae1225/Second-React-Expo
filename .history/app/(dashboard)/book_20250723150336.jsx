import React, { useState } from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, Keyboard} from 'react-native'
import { useAppointments } from '../../hooks/useAppointments.js'
import { useRouter } from 'expo-router'

// themed components
import ThemedView from '../../components/ThemedView.jsx'
import ThemedText from '../../components/ThemedText.jsx'
import Spacer from '../../components/Spacer.jsx'


const Book = () => {
  const [ name, setName ] = useState("")
  const [ date, setDate ] = useState("")
  const [ loading, setLoading ] = useState(false)

  const { createAppointments } = useAppointments()
  const router = useRouter()
  )
  return (
    <ThemedView style={styles.container}>
       <ThemedText title={true} style={styles.heading} >
        Book your Appointment</ThemedText>
      <Spacer />

      <ThemedText>
        Time to start booking your appointment with Jerome
      </ThemedText>
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