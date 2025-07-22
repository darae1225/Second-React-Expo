import { Keyboard, Pressable, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View, useColorScheme } from 'react-native'
import React, { useState } from 'react'
import { Link } from 'expo-router'
import { Colors } from '../../constants/Colors.js'
import { useUser } from '../../hooks/useUser.jsx'

//Themed components
import Spacer from '../../components/Spacer.jsx'
import ThemedView from '../../components/ThemedView.jsx'
import ThemedText from '../../components/ThemedText.jsx'
import ThemedButton from '../../components/ThemedButton.jsx'
import ThemedLink from '../../components/ThemedLink.jsx'
import ThemedTextInput from '../../components/ThemedTextInput.jsx'

const Register = () => {

  const colors = useColorScheme()
  const theme = Colors[colors] === 'dark' ? Colors.dark : Colors.light

  const [ firstname, setFirstname ] = useState('')
  const [ lastname, setLastname ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] =useState('')

  const { user, register } = useUser()

  const handleSubmit = async () => {
    try {
      await register (email, password)
    } catch (error) {
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
     <ThemedView style={styles.container}>
        <Spacer />
        <ThemedText title={true} style={styles.title}> Register an Account </ThemedText>

        <Spacer />

        <ThemedTextInput 
          style={{ width: '80%', marginBottom:20 }}
          placeholder= "First name"
          keyboardType= "default"
          onChangeText={setFirstname}
          value={firstname}
          />
        <ThemedTextInput 
          style={{ width: '80%', marginBottom:20 }}
          placeholder= "Last name"
          keyboardType= "default"
          onChangeText={setLastname}
          value={lastname}
          />
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
          <ThemedText style={{color: '#fefefe'}}>Register</ThemedText>
        </ThemedButton>

        <Spacer height={100} />
        <ThemedLink href='/login'>
          <ThemedText style={{color: '#fefefe'}}>
            Login Instead
          </ThemedText>
        </ThemedLink>
        <ThemedLink>
          <ThemedText style={{color: '#fefefe'}}>Back Home</ThemedText>
        </ThemedLink>
      </ThemedView>
    </TouchableWithoutFeedback>
 
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