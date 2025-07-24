import React, { useState } from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, Keyboard, Platform, View} from 'react-native'
import { useAppointments } from '../../hooks/useAppointments.js'
import { useRouter } from 'expo-router'
import DateTimePicker from '@react-native-community/datetimepicker'

// themed components
import ThemedView from '../../components/ThemedView.jsx'
import ThemedText from '../../components/ThemedText.jsx'
import ThemedTextInput from '../../components/ThemedTextInput.jsx'
import ThemedButton from '../../components/ThemedButton.jsx'
import ThemedLink from '../../components/ThemedLink.jsx'
import Spacer from '../../components/Spacer.jsx'


const Book = () => {
  const [ name, setName ] = useState("")
  const [ date, setDate ] = useState(new Date())
  const [ loading, setLoading ] = useState(false)
  const [showPicker, setShowPicker ] = useState(false)

  const { createAppointment } = useAppointments()
  const router = useRouter()

  const handleDateChange = (event, selectedDate) => {
    setShowPicker(false)
    if (selectedDate ) {
      setDate(selectedDate)
    }
  }

  const handleSubmit = async () => {
    if (!name.trim() || !date) return
    
    setLoading(true)
    
    await createAppointment({ name, date })
    
    // reset fields 
    setName("")
    setDate(new Date())

    //redirect
    router.replace('/appointments')

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

        <View style={{ width: '80%', marginBottom:20 }}>
          <ThemedButton onPress={() => setShowPicker(true)}>
            <ThemedText style={{ color: '#fefefe' }}>
              {date ? date.toDateString() : "Pick a date"}
            </ThemedText>
          </ThemedButton>

          {showPicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display={Platform.OS === 'ios' ? 'calendar' : 'default'}
            onChange={handleDateChange
            }/>
          )}
        </View>

        <ThemedButton onPress={handleSubmit} disabled={loading}>
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