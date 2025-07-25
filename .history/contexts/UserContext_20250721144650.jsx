import { createContext, useEffect, useState } from "react";
import { account } from '../lib/appwrite'
import { ID } from 'react-native-appwrite'

//global user state

export const UserContext = createContext()

export function UserProvider ({ children }) {
  const [ user, setUser ] = useState(null)
  const [ authChecked, setAuthChecked ] = useState(false)
  
  async function login(email, password) {
    try {
      await account.createEmailPasswordSession(email, password)
      const response = await account.get()
      setUser(response)
      console.log('user logged in is '+ user)
    } catch (error) {
      throw error
    }
  }

  async function register(email, password) {
    try {
      await account.create(ID.unique(), email, password) //to create user account 
      await login(email, password)
    } catch (error) {
      throw error
    }
  }

  async function logout() {
    await account.deleteSession("current")
    setUser(null)
    console.log('user is logged out NOW')
  }

  async function getInitialUserValue() {
    try {
      const response = await account.get()
      setUser(response)
    } catch (error) {
      setUser(null)
    } finally {
      setAuthChecked(true)
    }
  }

  useEffect(() => {
    getInitialUserValue()
  }, [])

  return (
    <UserContext.Provider value={{ user, login, register, logout, authChecked }}>
      {children}
    </UserContext.Provider>
  )
}
