import React, { ReactNode, useState } from 'react';
import { NavItemStyled } from './NavItemStyled';
import arrowIcon from '../../icons/chevron-down.svg';
import navIcon from '../../icons/basket3.svg';
import dotIcon from '../../icons/dot.svg';
import { NavArrowStyled } from './NavArrowStyled';

type Props = {
  id: string;
  depth: number;
  title: string;
  parent?: boolean;
  children?: ReactNode;
};

export const NavItem = ({ title, children, depth, parent, id }: Props) => {
  const [open, setOpen] = useState(false);

  const itemState = open ? 'open' : 'closed';
  return (
    <NavItemStyled
      depth={depth}
      className={`${itemState}`}
      id={id}
      role='treeitem'
      aria-expanded={open ? 'true' : 'false'}
    >
      <button
        className='itemHead'
        onClick={() => setOpen(!open)}
        data-testid='itemHead'
      >
        <div className='logoAndTitle'>
          {depth === 1 ? (
            <img src={navIcon} className='itemLogo' alt='nav logo' />
          ) : (
            <img src={dotIcon} className='itemChildLogo' alt='nav logo' />
          )}
          <span className='titleText'>{title}</span>
        </div>
        {parent ? (
          <NavArrowStyled open={open} src={arrowIcon} alt='nav toggle' />
        ) : null}
      </button>
      <div className='itemBody'>{children}</div>
    </NavItemStyled>
  );
};
export const MemoizedNavItem = React.memo(NavItem);
