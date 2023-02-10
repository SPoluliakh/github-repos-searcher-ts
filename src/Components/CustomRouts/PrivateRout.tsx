import { Navigate } from 'react-router-dom';
import { useAuth } from '../huks/useAuth';
import { IProps } from './interface';

export const PrivateRout = ({
  component: Component,
  redirectTo = '/',
}: IProps) => {
  const { isLoggedIn, isRefreshing, token } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing && !token;
  return shouldRedirect ? <Navigate to={redirectTo} replace /> : Component;
};
