import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

//Themed components
import ThemedView from '../../components/ThemedView.jsx'
import ThemedText from '../../components/ThemedText.jsx'
import Spacer from '../../components/Spacer.jsx'
import { Link } from 'expo-router'


const Register = () => {
  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText title={true} style={styles.title}> Login to Your Account </ThemedText>

      <Spacer height={100} />
      <Link href='/login'>
        <ThemedText style={{ textAlign: 'center' }}>Login Instead</ThemedText>
      </Link>
    </ThemedView>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25
  }
})