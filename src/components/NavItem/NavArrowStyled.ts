import styled from 'styled-components';

interface NavArrowProps {
  open: boolean;
}
export const NavArrowStyled = styled.img<NavArrowProps>`
  transition: all 0.2s ease-out;
  transform: ${(props) => (props.open ? `rotate(180deg)` : ``)};
`;
