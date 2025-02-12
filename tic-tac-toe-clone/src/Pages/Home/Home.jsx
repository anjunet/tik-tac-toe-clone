import React, { useContext } from "react";
import { Container, Title, SubTitle } from "../../styles/General.styled";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { SfxContext } from "../../contexts/SfxContext";

function Home() {
  const navigate = useNavigate();
  const { hoverSfx, clickSfx } = useContext(SfxContext);
  return (
    <Container columnBased>
      <Title>Tictactoe</Title>
      <SubTitle>Play with your friends , Higher score wins!</SubTitle>
      <Button
        onClick={() => {
          clickSfx();
          navigate("/game-on");
        }}
        onMouseEnter={() => hoverSfx()}
      >
        Play now
      </Button>
    </Container>
  );
}

export default Home;
