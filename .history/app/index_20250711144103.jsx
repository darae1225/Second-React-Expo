import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = () => {
  const hello = 'hi'
  return (
    <View>
      <Text>index{hello}</Text>
      <Text>Reading List App</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})