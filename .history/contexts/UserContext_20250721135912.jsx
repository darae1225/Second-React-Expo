import { createContext, useState } from "react";
import { account } from '../lib/appwrite'
import { ID } from 'react-native-appwrite'

//global user state

export const UserContext = createContext()

export function UserProvider ({ children }) {
  const [ user, setUser ] = useState(null)
  
  async function login(email, password) {
    try {
      await account.createEmailPasswordSession(email, password)
      const response = await account.get()
      setUser(response)
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
    console.log('logged out')
  }

  return (
    <UserContext.Provider value={{ user, login, register, logout }}>
      {children}
    </UserContext.Provider>
  )
}
