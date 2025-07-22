import { Keyboard, Pressable, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View, useColorScheme } from 'react-native'
import React, { useState } from 'react'
import { Link } from 'expo-router'
import { Colors } from '../../constants/Colors.js'

//Themed components
import ThemedView from '../../components/ThemedView.jsx'
import ThemedText from '../../components/ThemedText.jsx'
import ThemedButton from '../../components/ThemedButton.jsx'
import Spacer from '../../components/Spacer.jsx'
import ThemedTextInput from '../../components/ThemedTextInput.jsx'
import { useUser } from '../../hooks/useUser.jsx'
import ThemedLink from '../../components/ThemedLink.jsx'

const Login = () => {

  const colorScheme = useColorScheme(Colors)
  const theme = Colors[colorScheme] ?? Colors.light
  
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  
  const { user } = useUser()

  function handleSubmit () {
    console.log('current user is ', user )
    console.log('form submitted' + email, password)
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container}>
        <Spacer />
        <ThemedText title={true} style={styles.title}> Login to Your Account </ThemedText>

        <Spacer />
        <ThemedTextInput 
          style={{ width: '80%', marginBottom:20 }}
          placeholder= "Email"
          keyboardType= "email-address"
          onChangeText={setEmail}
          value={email}
          />
          
        <ThemedTextInput 
          style={{ width: '80%', marginBottom:20 }}
          placeholder= "Password"
          secureTextEntry={true}
          onChangeText={setPassword}
          value={password}
          />

        <ThemedButton onPress={handleSubmit}>
         <ThemedText title={true}>Login</ThemedText>
        </ThemedButton>

        <Spacer height={100} />
        <ThemedLink href="/register">
          <ThemedText title={true}>Register Instead</ThemedText>
        </ThemedLink>

        <ThemedLink>
          <ThemedText title={true}>Back Home</ThemedText>
        </ThemedLink>

      </ThemedView>
    </TouchableWithoutFeedback>

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
  pressed: {
    opacity: 0.8
  }
})