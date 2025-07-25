import { useRouter } from 'expo-router'
import { useUser } from '../hooks/useUser.jsx'
import { useEffect } from 'react'
import ThemedLoader from './ThemedLoader.jsx'

const GuestOnly = ({ children }) => {
  const { user, authChecked } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (authChecked && user !== null ){
      router.replace('/profile')
    }
  }, [user, authChecked])

  if (!authChecked || user){
    return(
      <ThemedLoader />
    )
  }

  return children
}

export default GuestOnly
