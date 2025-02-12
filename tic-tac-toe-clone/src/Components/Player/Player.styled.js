import styled from "styled-components";

export const PlayerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 6rem;

  ${(props) => props.theme.media.mobile} {
    flex-direction: row;
    margin: 2rem;
  }
`;

export const AvatarWrapper = styled.div`
  div {
    display: flex;
    height: 10rem;
    width: 10rem;
    filter: ${(props) => (props.isPlayeractive ? "" : "grayscale(100%)")};

    ${(props) => props.theme.media.mobile} {
      height: 8rem;
      width: 8rem;
    }
  }
`;
