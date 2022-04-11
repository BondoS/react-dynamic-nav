import styled from 'styled-components';

export const AsideStyled = styled.aside`
  float: left;
  width: 80%;
  min-height: 100vh;
  padding-inline: 15px 20px;
  border-inline-end: 2px solid #bbbbbf;
  @media (min-width: 480px) {
    width: 25%;
  }
`;
