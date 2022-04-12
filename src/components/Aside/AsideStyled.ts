import styled from 'styled-components';

interface Props {
  open: boolean;
}
export const AsideStyled = styled.aside<Props>`
  background: white;
  float: left;
  overflow: hidden;
  width: ${(props) => (props.open ? '80%' : '20px')};
  min-height: 100vh;
  padding-inline: 5px 20px;
  padding-block-start: 15px;
  border-inline-end: 2px solid #bbbbbf;
  position: absolute;
  @media (min-width: 480px) {
    position: initial;
    width: ${(props) => (props.open ? '25%' : '20px')};
  }
  .toggleDrawerBtn {
    background: none;
    border: none;
    cursor: pointer;
    &:hover {
      img {
        filter: invert(16%) sepia(37%) saturate(6848%) hue-rotate(288deg)
          brightness(79%) contrast(95%);
      }
    }
  }
  .toggleDrawerImg {
    height: 23px;
  }
`;
