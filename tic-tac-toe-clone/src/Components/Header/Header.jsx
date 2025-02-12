import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { HeaderWrapper } from "./Header.styled";
import { ReactComponent as Logo } from "../../assets/svgs/tic-tac-toe.svg";
import { DarkModeIcon, LightModeIcon } from "./Header.styled";
import { useNavigate } from "react-router-dom";
import { SfxContext } from "../../contexts/SfxContext";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const { hoverSfx, clickSfx } = useContext(SfxContext);
  return (
    <HeaderWrapper>
      <Logo
        onClick={() => {
          clickSfx();
          navigate("/");
        }}
        className="logo"
        onMouseEnter={() => hoverSfx()}
      />
      <span
        onClick={() => {
          clickSfx();
          toggleTheme();
        }}
        onMouseEnter={() => hoverSfx()}
      >
        {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
      </span>
    </HeaderWrapper>
  );
}

export default Header;
