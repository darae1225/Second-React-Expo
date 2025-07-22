import { useUser } from '../hooks/useUser.jsx'

const UserOnly = ({ children }) => {
  const { user, authChecked } = useUser()
  comsole.log(authChecked)
}

export default UserOnly
