import { createContext, useState } from "react";
import { databases } from '../lib/appwrite'
import { ID, Permission, Role } from "react-native-appwrite";
import { useUser } from '../hooks/useUser'

const DATABASE_ID = "688062410016c9e3cf2e"
const COLLECTION_ID = "6880625a0024bd569f45"

export const AppointmentsContext = createContext()

export function AppointmentsProvider( {children} ) {
  const [appointments, setAppointments ] = useState([])
  const { user } = useUser()
  
  async function fetchAppointments (id) {
    try {

    } catch (error) {
      console.log(error.message)
    } 
  }

  async function fetchAppointmentsById (id) {
    try {

    } catch (error) {
      console.log(error.message)
    }

  }
  async function createAppointment (data) {
    try {
      const newAppointment = await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        ID.unique(),
        {...data, userId:user.$id},
        [
          Permission.read(Role.user(user.$id)),
          Permission.update(Role.user(user.$id)),
          Permission.delete(Role.user(user.$id)),
        ]
      )

    } catch (error) {
      console.log(error.message)
    }

  }

  async function deleteAppointment (id) {
    try {

    } catch (error) {
      console.log(error.message)
    }

  }
  return (
    <AppointmentsContext.Provider
      value={{appointments, fetchAppointments, fetchAppointmentsById, createAppointment, deleteAppointment }}
    >
      { children }
    </AppointmentsContext.Provider>
  )
}