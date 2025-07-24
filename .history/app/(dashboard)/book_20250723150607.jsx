import React, { useState } from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, Keyboard} from 'react-native'
import { useAppointments } from '../../hooks/useAppointments.js'
import { useRouter } from 'expo-router'

// themed components
import ThemedView from '../../components/ThemedView.jsx'
import ThemedText from '../../components/ThemedText.jsx'
import Spacer from '../../components/Spacer.jsx'


const Book = () => {
  const [ name, setName ] = useState("")
  const [ date, setDate ] = useState("")
  const [ loading, setLoading ] = useState(false)

  const { createAppointments } = useAppointments()
  const router = useRouter()
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
     <ThemedView style={styles.container}>
        <Spacer />
        <ThemedText title={true} style={styles.title}> 
          Register an Account
        </ThemedText>

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
          <ThemedText style={{color: '#fefefe'}}>Register</ThemedText>
        </ThemedButton>

        <Spacer />
        {error && <Text style={styles.error}>Error is {error.message}</Text>}

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

export default Book

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