import {Text} from 'react-native'
import { useRouter } from 'expo-router'
import { useUser } from '../hooks/useUser.jsx'
import { useEffect } from 'react'

const UserOnly = ({ children }) => {
  const { user, authChecked } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (authChecked && user === null ){
      router.replace('/login')
    }
  }, [user, authChecked])

  if (!authChecked || !user){
    return(
      <Text>Loading</Text>
      
    )
  }

  return children
}

export default UserOnly
