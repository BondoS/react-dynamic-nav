import React, { ReactNode } from 'react';
import { HeaderStyled } from './HeaderStyled';

type Props = {
  children: ReactNode;
};

export const Header = ({ children }: Props) => {
  return <HeaderStyled>{children}</HeaderStyled>;
};
