import { ReactNode } from 'react';
import { AsideStyled } from './AsideStyled';
import HamburgerMenu from '../../icons/list.svg';

type Props = {
  children: ReactNode;
  isDrawerOpen: boolean;
  setIsDrawerOpen: (status: boolean) => void;
};

export const Aside = ({ children, isDrawerOpen, setIsDrawerOpen }: Props) => {
  return (
    <AsideStyled open={isDrawerOpen}>
      <button
        className='toggleDrawerBtn'
        type='button'
        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
        aria-expanded={isDrawerOpen ? 'true' : 'false'}
      >
        <img
          className='toggleDrawerImg'
          src={HamburgerMenu}
          alt='Toggle left drawer'
        ></img>
      </button>

      {children}
    </AsideStyled>
  );
};
