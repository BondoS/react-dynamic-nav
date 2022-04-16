import styled from 'styled-components';

export const HeaderStyled = styled.header`
  border-bottom: 2px solid #bbbbbf;
  padding-left: 45px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  @media (min-width: 480px) {
    padding-left: initial;
  }
`;
