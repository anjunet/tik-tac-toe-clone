import React, { useContext } from "react";
import { CellStyle } from "./GameCell.styled";
import { GameContext } from "../../contexts/GameContext";
import { checkForWinner } from "../../utils/GameUtils";
import iconX from "/src/assets/svgs/icon-x.svg";
import iconO from "/src/assets/svgs/icon-o.svg";
import iconXoutline from "/src/assets/svgs/icon-x-outline.svg";
import iconOoutline from "/src/assets/svgs/icon-o-outline.svg";
import { ModalContext } from "../../contexts/ModalContext";
import { SfxContext } from "../../contexts/SfxContext";
import RoundOverModal from "../Modal/RoundOverModal/RoundOverModal";

function GameCell({ cellItem, index, isWinningCell }) {
  const { updateBoard, game, roundComplete } = useContext(GameContext);
  const { handleModal } = useContext(ModalContext);
  const { hoverSfx, clickSfx, winSfx } = useContext(SfxContext);

  const handleCellClick = () => {
    clickSfx();
    updateBoard(index);
    const result = checkForWinner(game.board);
    if (result) {
      roundComplete(result);
      if (result !== "draw") {
        winSfx();
      }
      setTimeout(() => {
        handleModal(<RoundOverModal />);
      }, 2000);
    }
  };

  if (cellItem === "x") {
    return (
      <CellStyle isWinningCell={isWinningCell}>
        <img src={iconX} alt="X Icon" className="markedItem" />
      </CellStyle>
    );
  } else if (cellItem === "o") {
    return (
      <CellStyle isWinningCell={isWinningCell}>
        <img src={iconO} alt="O Icon" className="markedItem" />
      </CellStyle>
    );
  }

  return (
    <CellStyle onClick={handleCellClick} onMouseEnter={() => hoverSfx()}>
      {game.turn === "x" ? (
        <img src={iconXoutline} alt="X Outline" className="outlineIcon" />
      ) : (
        <img src={iconOoutline} alt="O Outline" className="outlineIcon" />
      )}
    </CellStyle>
  );
}

export default GameCell;

// import React, { useContext } from "react";
// import { CellStyle } from "./GameCell.styled";
// import { GameContext } from "../../contexts/GameContext";
// import { ModalContext } from "../../contexts/ModalContext";
// import { SfxContext } from "../../contexts/SfxContext";
// import { checkForWinner } from "../../utils/GameUtils";
// import iconX from "../../assets/svgs/icon-x.svg";
// import iconO from "../../assets/svgs/icon-o.svg";
// import iconXoutline from "../../assets/svgs/icon-x-outline.svg";
// import iconOoutline from "../../assets/svgs/icon-o-outline.svg";
// import RoundOverModal from "../Modal/RoundOverModal/RoundOverModal";

// function GameCell({ cellItem, index, isWinningCell }) {
//   const { updateBoard, game, roundComplete } = useContext(GameContext);
//   const { handleModal } = useContext(ModalContext);
//   const { hoverSfx, clickSfx, winSfx } = useContext(SfxContext);

//   const handleCellClick = () => {
//     clickSfx();
//     updateBoard(index);
//     const result = checkForWinner(game.board);
//     if (result) {
//       roundComplete(result);
//       if (result !== "draw") {
//         winSfx();
//       }
//       setTimeout(() => {
//         handleModal(<RoundOverModal />);
//       }, 2000);
//     }
//   };

//   return (
//     <CellStyle
//       isWinningCell={isWinningCell}
//       onClick={cellItem ? null : handleCellClick}
//       onMouseEnter={hoverSfx}
//     >
//       {cellItem === "x" && (
//         <img src={iconX} alt="X Icon" className="markedItem" />
//       )}
//       {cellItem === "o" && (
//         <img src={iconO} alt="O Icon" className="markedItem" />
//       )}
//       {!cellItem && (
//         <img
//           src={game.turn === "x" ? iconXoutline : iconOoutline}
//           alt="Outline Icon"
//           className="outlineIcon"
//         />
//       )}
//     </CellStyle>
//   );
// }

// export default GameCell;
