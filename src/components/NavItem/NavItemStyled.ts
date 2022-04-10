import styled from 'styled-components';

interface Props {
  depth: number;
}
export const NavItemStyled = styled.div<Props>`
  margin-inline-start: ${(props) => props.depth * 2}%;
`;
