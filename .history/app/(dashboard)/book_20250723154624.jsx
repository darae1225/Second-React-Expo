import React, { useState } from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, Keyboard} from 'react-native'
import { useAppointments } from '../../hooks/useAppointments.js'
import { useRouter } from 'expo-router'

// themed components
import ThemedView from '../../components/ThemedView.jsx'
import ThemedText from '../../components/ThemedText.jsx'
import ThemedTextInput from '../../components/ThemedTextInput.jsx'
import ThemedButton from '../../components/ThemedButton.jsx'
import ThemedLink from '../../components/ThemedLink.jsx'
import Spacer from '../../components/Spacer.jsx'
import { ReloadInstructions } from 'react-native/Libraries/NewAppScreen'


const Book = () => {
  const [ name, setName ] = useState("")
  const [ date, setDate ] = useState("")
  const [ loading, setLoading ] = useState(false)

  const { createAppointments } = useAppointments()
  const router = useRouter()

  const handleSubmit = async () => {
    if (!name.trim() || !date.trim()) return
    
    setLoading(true)
    
    await createAppointments({ data, date })
    
    // reset fields 
    setName("")
    setDate("")

    //redirect
    router.replace('/profile')

    //reset loading
    setLoading(false)
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
     <ThemedView style={styles.container}>
        <Spacer />
        <ThemedText title={true} style={styles.title}> 
          Book your appointment
        </ThemedText>

        <Spacer />

        <ThemedTextInput 
          style={{ width: '80%', marginBottom:20 }}
          placeholder= "Name"
          onChangeText={setName}
          value={name}
          />

        <ThemedTextInput 
          style={{ width: '80%', marginBottom:20 }}
          placeholder= "Date"
          onChangeText={setDate}
          value={date}
          />

        <ThemedButton onPress={handleSubmit} disdabled={loading}>
          <ThemedText style={{color: '#fefefe'}}>
            {loading ? "Saving..." : "Book your appointment"}
          </ThemedText>

        </ThemedButton>

        <Spacer />
        {/* {error && <Text style={styles.error}>Error is {error.message}</Text>} */}

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