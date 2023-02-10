import * as SC from './CustomLink.styled';

interface IProps {
  children: string;
  to: string;
}

export const CustomLink = ({ children, to }: IProps) => {
  return (
    <>
      <SC.Link to={to}> {children} </SC.Link>
    </>
  );
};
