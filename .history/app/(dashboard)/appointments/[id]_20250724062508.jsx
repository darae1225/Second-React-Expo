import React from 'react'
import { StyleSheet } from 'react-native'

import Spacer from '../../../components/Spacer'
import ThemedText from '../../../components/ThemedText'
import ThemedCard from '../../../components/ThemedCard'
import ThemedView from '../../../components/ThemedView'
import ThemedButton from '../../../components/ThemedButton'

const AppointmentDetails = () => {
  return (
    <ThemedView safe={true} style={styles.container}> 
      <ThemedText>AppointmentDetails</ThemedText>
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