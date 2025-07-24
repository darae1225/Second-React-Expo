import React, { useState } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import {useAppointments } from '../../hooks/useAppointments'
import { Colors } from 'react-native/Libraries/NewAppScreen'

// themed components
import Spacer from '../../components/Spacer'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import ThemedCard from '../../components/ThemedCard'

const Appointments = ( {style, ...props}) => {

  const { appointments } = useAppointments()  

  return (
    <ThemedView style={styles.container} safe={true}>
      
      <Spacer />
      <ThemedText title={true} style={styles.heading} >
        Your Appointment List
      </ThemedText>

      <Spacer />
      <FlatList
        data={appointments}
        keyExtractor={(item)=> item.$id}
        >

      </FlatList>

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