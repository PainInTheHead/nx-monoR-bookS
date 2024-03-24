import { Navigate, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/hookStore';

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  const user = useAppSelector((state) => state.user.user.email);
  if (!user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
