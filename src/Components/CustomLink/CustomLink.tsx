import * as SC from './CustomLink.styled';
import React from 'react';

interface IProps {
  children: React.ReactNode;
  to: string;
}

export const CustomLink = ({ children, to }: IProps) => {
  return (
    <>
      <SC.Link to={to}> {children} </SC.Link>
    </>
  );
};
