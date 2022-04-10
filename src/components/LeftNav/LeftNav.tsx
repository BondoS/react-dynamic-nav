import React, { ReactNode } from 'react';
import { NavItem } from '../../store/slices';
import { MemoizedNavItem } from '../NavItem';
import { LeftNavStyled } from './LeftNavStyled';

type Props = {
  children?: ReactNode;
  navList: NavItem[];
};

export const LeftNav = ({ children, navList }: Props) => {
  const recursiveRender = (navItem: NavItem, depth = 1) => {
    if (Array.isArray(navItem.children) && navItem.children.length > 0) {
      const childrenDepth = depth + 1;
      return (
        <MemoizedNavItem key={navItem.id} title={navItem.title} depth={depth}>
          <div>
            {navItem.children.map((navItem) =>
              recursiveRender(navItem, childrenDepth)
            )}
          </div>
        </MemoizedNavItem>
      );
    } else {
      return (
        <MemoizedNavItem
          key={navItem.id}
          title={navItem.title}
          depth={depth}
        ></MemoizedNavItem>
      );
    }
  };
  return (
    <LeftNavStyled>
      {navList.map((item) => recursiveRender(item))}
    </LeftNavStyled>
  );
};
