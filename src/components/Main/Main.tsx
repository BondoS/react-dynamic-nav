import { ReactNode } from 'react';
import { MainStyled } from './MainStyled';

type Props = {
  children?: ReactNode;
};

export function Main({ children }: Props) {
  return <MainStyled>{children}</MainStyled>;
}
