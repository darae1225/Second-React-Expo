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
      console.log(error.message)
a
    }
  }

  async function register(user, email, password) {
    try {
      await account.create(ID.unique(), email, password)
      await login(email, password)
    } catch (error) {
      console.log(error.message)
    }
  }

  async function logout() {
    
  }

  return (
    <UserContext.Provider value={{ user, firstname, lastname, login, register, logout }}>
      {children}
    </UserContext.Provider>
  )
}