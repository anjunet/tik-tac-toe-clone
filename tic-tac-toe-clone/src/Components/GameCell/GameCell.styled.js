import styled from "styled-components";

export const CellStyle = styled.button`
  background-color: ${(props) =>
    props.isWinningCell
      ? props.theme.colors.yellow
      : props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.primary};
  font-size: 3rem;
  height: 8rem;
  width: 8rem;
  margin: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 2.5rem;
  box-shadow: 3px 10px ${(props) => props.theme.colors.cream};
  cursor: pointer;
  padding: 2rem;

  .markedItem {
    path {
      fill: ${(props) => props.theme.colors.primary};
    }
  }

  .outlineIcon {
    path {
      stroke: ${(props) => props.theme.colors.primary};
      stroke-width: 0;
    }
  }
  &:hover {
    .outlineIcon {
      path {
        stroke: ${(props) => props.theme.colors.primary};
        stroke-width: 2;
      }
    }
  }
`;
