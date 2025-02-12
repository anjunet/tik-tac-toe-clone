import React from "react";
import { GameContextProvider } from "./GameContext";
import { SfxContextProvider } from "./SfxContext";
import { ThemeContextProvider } from "./ThemeContext";

function Provider({ children }) {
  return (
    <ThemeContextProvider>
      <GameContextProvider>
        <SfxContextProvider>{children} </SfxContextProvider>
      </GameContextProvider>
    </ThemeContextProvider>
  );
}

export default Provider;
