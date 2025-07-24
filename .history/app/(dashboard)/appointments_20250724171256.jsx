import React, { useState } from 'react'
import { FlatList, Pressable, StyleSheet } from 'react-native'
import { useAppointments } from '../../hooks/useAppointments'
import { Colors } from '../../constants/Colors'

// themed components
import Spacer from '../../components/Spacer'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import ThemedCard from '../../components/ThemedCard'
import { useRouter } from 'expo-router'

const Appointments = ( {style, ...props}) => {

  const { appointments } = useAppointments()
  const router = useRouter()

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
        renderItem={ ({item}) => (
          <Pressable onPress={ () => router.push(`/appointments/${item.$id}`) }>
            <ThemedCard style={styles.card}>
              <ThemedText style={styles.title}>Name: {item.name}</ThemedText>
              <ThemedText style={styles.title}>
                Appointment Date: {new Date(item.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                })}
              </ThemedText>
              <ThemedText style={styles.title}>Therapist: Jerome Choo</ThemedText>
            </ThemedCard>
          </Pressable>
        )}
        ListEmptyComponent={
          <ThemedText>No appointments found.</ThemedText>
        }
        />

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
    marginBottom: 20,
    padding: 10,
    paddingLeft: 14,
    borderLeftColor: Colors.primary,
    borderLeftWidth: 4
  }
})