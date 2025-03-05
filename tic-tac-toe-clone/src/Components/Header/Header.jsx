import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { HeaderWrapper, DarkModeIcon, LightModeIcon } from "./Header.styled";
import { useNavigate } from "react-router-dom";
import { SfxContext } from "../../contexts/SfxContext";
import Logo from "../../assets/svgs/tic-tac-toe.svg";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const { hoverSfx, clickSfx } = useContext(SfxContext);

  return (
    <HeaderWrapper>
      <img
        src={Logo}
        alt="Tic Tac Toe Logo"
        className="logo"
        onClick={() => {
          clickSfx();
          navigate("/");
        }}
        onMouseEnter={hoverSfx}
      />
      <span
        onClick={() => {
          clickSfx();
          toggleTheme();
        }}
        onMouseEnter={hoverSfx}
      >
        {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
      </span>
    </HeaderWrapper>
  );
}

export default Header;
