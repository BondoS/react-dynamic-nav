import styled from 'styled-components';

export const ProfileStyled = styled.div`
  color: #6d3b71;
  margin-block: auto auto;
  margin-inline-end: 5px;
  @media (min-width: 576px) {
    margin-inline-end: 30px;
  }
  & svg {
    height: 25px;
    width: 25px;
  }
`;
