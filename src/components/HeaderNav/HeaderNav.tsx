import React, { ReactNode } from 'react';
import { HeaderNavStyled } from './HeaderNavStyled';

type Props = {
  children?: ReactNode;
};

export const HeaderNav = ({ children }: Props) => {
  return <HeaderNavStyled>{children}</HeaderNavStyled>;
};
