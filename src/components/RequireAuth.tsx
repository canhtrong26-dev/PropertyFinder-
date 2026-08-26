import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectAuthUser } from '../features/auth/authSlice'

type RequireAuthProps = {
  children: React.ReactNode
}

function RequireAuth({ children }: RequireAuthProps) {
  const user = useSelector(selectAuthUser)

  if (!user || user.role !== 'admin') {
    return <Navigate to="/login" replace />
  }

  return <>{children}</>
}

export default RequireAuth
