import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <Text style={styles.description}>Call us on 0430 522 850</Text>
      <Text style={styles.description}>www.choosetherapy.com.au</Text>
      <Text style={styles.description}>choosetherapy@gmail.com</Text>
      
      <Link href="/" style={styles.link}>Back Home</Link>
    </View>
  )
}

export default Contact

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18
  },
  description: {
    textAlign: 'center'
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1
  }
})