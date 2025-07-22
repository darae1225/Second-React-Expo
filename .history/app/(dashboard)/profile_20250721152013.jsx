import { StyleSheet, Text, View } from 'react-native'
import { useUser } from '../../hooks/useUser.jsx'
import React from 'react'

// themed components
import Spacer from '../../components/Spacer.jsx'
import ThemedView from '../../components/ThemedView.jsx'
import ThemedText from '../../components/ThemedText.jsx'
import ThemedButton from '../../components/ThemedButton.jsx'
import ThemedLink from '../../components/ThemedLink.jsx'



const Profile = ( {style, ...props}) => {
  const { user, logout } = useUser()

  return (
    <ThemedView style={styles.container}>
      
      <ThemedText title={true} style={styles.heading} >
        {user.email}
      </ThemedText>
      <Spacer />

      <ThemedText>
        Time to book an appointment with Jerome...
      </ThemedText>
      <Spacer />

      <ThemedButton onPress={logout}>
        <Text style={{color: '#f2f2f2'}}>
          Log Out
        </Text>
      </ThemedButton>

        <ThemedLink>
          <Text style={{color: '#fefefe'}}>Back Home</Text>
        </ThemedLink>
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