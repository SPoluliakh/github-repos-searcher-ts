import { AuthNav } from '../AuthNav/AuthNav';
import { UserNav } from '../UserNav/UserNav';
import { UserMenu } from '../UserMenu/UserMenu';
import { useAuth } from '../huks/useAuth';
import * as SC from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <SC.Header>
        <SC.MainNav>
          <UserNav />
          {!isLoggedIn ? <AuthNav /> : <UserMenu />}
        </SC.MainNav>
      </SC.Header>
    </>
  );
};
