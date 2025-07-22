import { useUser } from '../hooks/useUser.jsx'

const UserOnly = ({ children }) => {
  const { user, authChecked } = useUser()

}

export UserOnly
