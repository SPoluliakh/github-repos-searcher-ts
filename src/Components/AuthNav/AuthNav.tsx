import { CustomLink } from '../CustomLink/CustomLink';
import * as SC from './AuthNav.styled';

interface IPages {
  id: string;
  name: string;
  href: string;
}

const pages: IPages[] = [
  { id: '1', name: 'Sign up', href: 'signup' },
  { id: '2', name: 'Sign in', href: 'signin' },
];

export const AuthNav = () => {
  return (
    <SC.AuthWrap>
      {pages.map(({ id, name, href }) => (
        <CustomLink key={id} to={href}>
          {name}
        </CustomLink>
      ))}
    </SC.AuthWrap>
  );
};
