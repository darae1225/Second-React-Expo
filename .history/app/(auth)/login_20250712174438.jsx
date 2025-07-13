import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'


//Themed components
import ThemedView from '../../components/ThemedView.jsx'
import ThemedText from '../../components/ThemedText.jsx'
import Spacer from '../../components/Spacer.jsx'
import { Link } from 'expo-router'
import { Colors } from '../../constants/Colors.js'


const Login = () => {
  function handleSubmit () {
    console.log('login form submitted')
  }

  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText title={true} style={styles.title}> Login to Your Account </ThemedText>

      <Spacer />
      <Pressable 
        onPress={handleSubmit}
        style={({ pressed}) => [styles.btn, pressed && styles.pressed]}
        >
        <Text style={{ color: '#f2f2f2' }}>Login</Text>
      </Pressable>

      <Spacer height={100} />
      <Link href='/register'>
        <ThemedText style={{ textAlign: 'center' }}>Register Instead</ThemedText>
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
  }
})