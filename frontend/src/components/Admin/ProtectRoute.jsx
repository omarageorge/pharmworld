import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';

export default function ProtectRoute({ children }) {
  const { user } = useContext(UserContext);
  if (!user) {
    return <Navigate to='/login' />;
  }

  return children;
}
