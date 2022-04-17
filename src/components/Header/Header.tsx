import { HeaderLogo } from '../HeaderLogo';
import { HeaderNav } from '../HeaderNav';
import { Profile } from '../Profile';
import { HeaderStyled } from './HeaderStyled';

export const Header = () => {
  return (
    <HeaderStyled>
      <HeaderLogo />
      <HeaderNav />
      <Profile />
    </HeaderStyled>
  );
};
