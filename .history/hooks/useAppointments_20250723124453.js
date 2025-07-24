import { useContext } from "react";
import { AppointmentsContext } from '../contexts/AppointmentsContext'

export function useAppointments() {
  const context = useContext(AppointmentsContext)

  if (!context) {
    throw new Error('useUser must be used within a UserProvider ')
  }
  return context
}