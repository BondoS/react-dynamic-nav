import React, { ReactNode } from 'react';
import { AsideStyled } from './AsideStyled';

type Props = {
  children: ReactNode;
};

export const Aside = ({ children }: Props) => {
  return <AsideStyled>{children}</AsideStyled>;
};
