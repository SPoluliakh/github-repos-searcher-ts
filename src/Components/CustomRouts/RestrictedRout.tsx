import { Navigate } from 'react-router-dom';
import { useAuth } from '../huks/useAuth';
import { IProps } from './interface';

export const RestrictedRout = ({
  component: Component,
  redirectTo = '/',
}: IProps) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} replace /> : Component;
};
