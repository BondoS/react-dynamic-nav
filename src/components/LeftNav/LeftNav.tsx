import React, { ReactNode } from 'react';
import { LeftNavStyled } from './LeftNavStyled';

type Props = {
  children: ReactNode;
};

export const LeftNav = ({ children }: Props) => {
  return <LeftNavStyled>LeftNav</LeftNavStyled>;
};
