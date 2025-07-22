import { Pressable, StyleSheet, Text, TextInput, View, useColorScheme } from 'react-native'
import React, { useState } from 'react'
import { Link } from 'expo-router'
import { Colors } from '../../constants/Colors.js'

//Themed components
import ThemedView from '../../components/ThemedView.jsx'
import ThemedText from '../../components/ThemedText.jsx'
import ThemedButton from '../../components/ThemedButton.jsx'
import Spacer from '../../components/Spacer.jsx'
import ThemedTextInput from '../../components/ThemedTextInput.jsx'

const Login = () => {

  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light
  
  const [ email, setEmail ] = useState('')

  function handleSubmit () {
    console.log('login form submitted')
  }

  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText title={true} style={styles.title}> Login to Your Account </ThemedText>

      <Spacer />
      <ThemedTextInput 
        Style={{ width: '80%', marginBottom:20 }}
        placeholder= "Email"
        keyboardType= "email-address"
        
        />

      <ThemedButton onPress={handleSubmit}>
        <Text style={{ color: '#f2f2f2' }}>Login</Text>
      </ThemedButton>

      <Spacer height={100} />
      <Link href='/register'>
        <ThemedText style={{ textAlign: 'center' }}>Register Instead</ThemedText>
      </Link>
      <Spacer />
      <Link href="/" style={[styles.link, {color: theme.title}]}>
        <ThemedText>Back Home</ThemedText>
      </Link>
    </ThemedView>
  )
}

export default Login

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
  },
    link: {
    marginVertical: 10,
    borderBottomWidth: 1
  }
})