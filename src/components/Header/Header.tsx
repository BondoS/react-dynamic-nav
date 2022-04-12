import { HeaderLogo } from '../HeaderLogo';
import { HeaderNav } from '../HeaderNav';
import { HeaderStyled } from './HeaderStyled';

export const Header = () => {
  return (
    <HeaderStyled>
      <HeaderLogo />
      <HeaderNav />
    </HeaderStyled>
  );
};
