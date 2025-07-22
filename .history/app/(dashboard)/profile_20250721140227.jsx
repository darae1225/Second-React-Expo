import { StyleSheet, Text, View } from 'react-native'
import { useUser } from '../../hooks/useUser.jsx'
import React from 'react'

// themed components
import Spacer from '../../components/Spacer.jsx'
import ThemedView from '../../components/ThemedView.jsx'
import ThemedText from '../../components/ThemedText.jsx'
import ThemedButton from '../../components/ThemedButton.jsx'



const Profile = ( {style, ...props}) => {
  const { logout } = useUser()

  return (
    <ThemedView style={styles.container}>
      
      <ThemedText title={true} style={styles.heading} >
        Your Email </ThemedText>
      <Spacer />

      <ThemedText>
        Time to book an appointment with Jerome...
      </ThemedText>
      <Spacer />

      <ThemedButton>Log out</ThemedButton>
    </ThemedView>
  )
}

export default Profile

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