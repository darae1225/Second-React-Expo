import { createContext, useState, useEffect } from "react";
import { databases, client } from '../lib/appwrite'
import { ID, Permission, Query, Role } from "react-native-appwrite";
import { useUser } from '../hooks/useUser'

const DATABASE_ID = "688062410016c9e3cf2e"
const COLLECTION_ID = "6880625a0024bd569f45"

export const AppointmentsContext = createContext()

export function AppointmentsProvider( {children} ) {
  const [appointments, setAppointments ] = useState([])
  const { user } = useUser()
  
  async function fetchAppointments (id) {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID,
        COLLECTION_ID,
        [
          Query.equal('userId', user.$id)
        ]
      )
      setAppointments(response.documents)

    } catch (error) {
      console.log('error is on AppointmentsContext.jsx 1' + error.message)
    } 
  }

  async function fetchAppointmentById (id) {

    try {
      const response = await databases.getDocument(
        DATABASE_ID,
        COLLECTION_ID,
        id       
      )

      return response

    } catch (error) {
      console.log('error is on AppointmentsContext.jsx 2' + error.message)
      return null
    }
  }

  async function createAppointment (data) {
    try {
      const newAppointment = await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        ID.unique(),
        {...data, userId: user.$id, date: data.date.toISOString() },
        [
          Permission.read(Role.user(user.$id)),
          Permission.update(Role.user(user.$id)),
          Permission.delete(Role.user(user.$id)),
        ]
      )

    } catch (error) {
      console.log('error is on AppointmentsContext.jsx 3' + error.message)
    }

  }

  async function deleteAppointment (id) {
    try {
      await databases.deleteDocument(DATABASE_ID, COLLECTION_ID, id)


    } catch (error) {
      console.log('error is on AppointmentsContext.jsx 4' + error.message)
    }

  }

  useEffect(() => {
    
    let unsubscribe

    const channel = `databases.${DATABASE_ID}.collections.${COLLECTION_ID}.documents`
    //more info about channels found in appwrite docs

    if (user) {
      fetchAppointments()
      
      unsubscribe = client.subscribe(channel, (response) => {
        
        const { payload, events } = response

        if (events[0].includes('create')) {
          setAppointments( (prevAppts )=> [...prevAppts, payload])
        }

        if (events[0].includes('delete')) {
          setAppointments( (prevAppts )=> prevAppts.filter((appt)=> appt.$id !== payload.$id))
        }

      })
    } else {
      setAppointments([])
    }

    return () => { //cleaner function
      if (unsubscribe) unsubscribe()
    }

  }, [user])

  return (
    <AppointmentsContext.Provider
      value={{appointments, fetchAppointments, fetchAppointmentById, createAppointment, deleteAppointment }}
    >
      { children }
    </AppointmentsContext.Provider>
  )
}