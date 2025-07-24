import { createContext, useState } from "react";

export const AppointmentsContext = createContext()

export function AppointmentsProvider( {children} ) {
  const [appointments, setAppointments ] = useState([])
  
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