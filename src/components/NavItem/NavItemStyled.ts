import styled from 'styled-components';

interface Props {
  depth: number;
}
export const NavItemStyled = styled.li<Props>`
  margin-inline-start: ${(props) => props.depth * 3}%;
  font-weight: 600;
  & .itemBody {
    overflow: hidden;
  }
  & .itemBody {
    transition: all 0.2s ease-out;
  }
  &.closed {
    & .itemBody {
      max-height: 0;
    }
  }
  &.open {
    & .itemBody {
      /* find a better way later */
      max-height: 1000px;
    }
  }
  & .itemHead {
    display: flex;
    justify-content: space-between;
    width: 100%;
    background: none;
    border: none;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-top: 2px;
    margin-bottom: 2px;
    cursor: pointer;
    &:hover {
      .titleText {
        color: #7f187f;
      }
      .itemChildLogo {
        opacity: 1;
      }
    }
  }
  .logoAndTitle {
    display: flex;
  }
  & .titleText {
    margin-left: 15px;
  }
  & .itemChildLogo {
    opacity: 0;
    filter: invert(16%) sepia(37%) saturate(6848%) hue-rotate(288deg)
      brightness(79%) contrast(95%);
    height: 23px;
  }
`;
