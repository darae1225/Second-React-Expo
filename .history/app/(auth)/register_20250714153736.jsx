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

const Register = () => {

  const colors = useColorScheme()
  const theme = Colors[colors] === 'dark' ? Colors.dark : Colors.light

  const [ firstname, setFirstname ] = useState('')
  const [ lastname, setLastname ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] =useState('')
  

  function handleSubmit () {
    console.log('Register form submitted')
  }

  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText title={true} style={styles.title}> Register to Your Account </ThemedText>

      <Spacer />

      <ThemedTextInput 
        style={{ width: '80%', marginBottom:20 }}
        placeholder= "first name"
        keyboardType= "default"
        onChangeText={setFirstname}
        value={firstname}
        />
      <ThemedTextInput 
        style={{ width: '80%', marginBottom:20 }}
        placeholder= "last name"
        keyboardType= "default"
        onChangeText={setLastname}
        value={lirstname}
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
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1
  }
})