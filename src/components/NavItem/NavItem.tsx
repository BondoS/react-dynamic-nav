import React, { ReactNode } from 'react';
import { NavItemStyled } from './NavItemStyled';

type Props = {
  parent?: boolean;
  title: string;
  children?: ReactNode;
  depth: number;
};

export const NavItem = ({ title, children, depth }: Props) => {
  return (
    <NavItemStyled depth={depth}>
      {title}
      {children}
    </NavItemStyled>
  );
};
export const MemoizedNavItem = React.memo(NavItem);
