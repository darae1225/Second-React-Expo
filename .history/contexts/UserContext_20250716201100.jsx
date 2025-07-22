import { createContext, useState } from "react";
import { account } from '../lib/appwrite'
import { ID } from 'react-native-appwrite'


//global user state

export const UserContext = createContext()

export function UserProvider ({ children }) {
  const [ user, setUser ] = useState(null)
  
  async function login(email, password) {
    
  }

  async function register(email, password) {
    
  }

  async function logout() {
    
  }

  return (
    <UserContext.Provider value={{ user, login, register, logout }}>
      {children}
    </UserContext.Provider>
  )
}