import React, { ReactNode } from 'react';
import { MidContentStyled } from './MidContentStyled';

type Props = {
  children: ReactNode;
};

export const MidContent = ({ children }: Props) => {
  return <MidContentStyled>{children}</MidContentStyled>;
};
