import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { Colors } from '../../constants/Colors.js'

//Themed components
import ThemedView from '../../components/ThemedView.jsx'
import ThemedText from '../../components/ThemedText.jsx'
import ThemedButton from '../../components/ThemedButton.jsx'
import Spacer from '../../components/Spacer.jsx'

const Register = () => {

  function handleSubmit () {
    console.log('Register form submitted')
  }

  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText title={true} style={styles.title}> Register to Your Account </ThemedText>

      <Spacer />
      <ThemedButton onPress={handleSubmit}>
        <Text style={{ color: '#f2f2f2' }}>Register</Text>
      </ThemedButton>

      <Spacer height={100} />
      <Link href='/login'>
        <ThemedText style={{ textAlign: 'center' }}>Login Instead</ThemedText>
      </Link>
      
      <Spacer />
      <Link href="/" style={[styles.link, {color: theme.title}]}>
        <ThemedText>Back Home</ThemedText>
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
  },
  btn: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 5,
  },
  pressed: {
    opacity: 0.8
  }
})