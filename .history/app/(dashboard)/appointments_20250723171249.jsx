import React, { useState } from 'react'
import { FlatList, Pressable, StyleSheet } from 'react-native'
import { useAppointments } from '../../hooks/useAppointments'
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
        keyExtractor={ (item) => item.$id}
        contentContainerStyle={styles.list}
        renderItem={ (item) => (
          <Pressable>
            <ThemedCard style={styles.card}>
              <ThemedText style={styles.title}>{item.name}</ThemedText>
              <ThemedText style={styles.title}>Appointment Date is {new Date(item.date).toLocaleDateString()} </ThemedText>
            </ThemedCard>
          </Pressable>
        )}
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
    fontSize: 20,
    marginBottom: 10
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center'
  },
  list: {
    marginTop: 40
  },
  card: {
    width: "98%",
    marginHorizontal: "5%",
    padding: 10,
    paddingLeft: 14,
    borderLeftColor: Colors.primary,
    borderLeftWidth: 4
  }
})