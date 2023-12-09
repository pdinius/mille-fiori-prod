import { FC, useContext } from "react";
import styles from "./InfoBar.module.scss";
import { GameContext } from "../../App";
import socket from "../../socket";

interface InfoBarProps {
  selectedCard: number;
  setSelectedCard: React.Dispatch<React.SetStateAction<number>>;
  selectedExtra: number;
  setSelectedExtra: React.Dispatch<React.SetStateAction<number>>;
}

export const InfoBar: FC<InfoBarProps> = ({ selectedCard, setSelectedCard, selectedExtra, setSelectedExtra }) => {
  const state = useContext(GameContext);

  const lockIn = () => {
    if (selectedCard === -1) {
      throw Error(`No card selected or game id was undefined.`);
    }
    socket.emit("lock-in", selectedCard, name, gamestate.id);
    setTimeout(() => setSelectedCard(-1), 500);
  };

  const chooseExtra = () => {
    if (selectedExtra === -1) {
      throw Error(`No card selected or game id was undefined.`);
    }
    socket.emit("choose-extra", selectedExtra, gamestate.id);
    setSelectedExtra(-1);
  };

  if (state?.gamestate === undefined) {
    return <></>;
  }

  const { name, gamestate } = state;
  let content: React.ReactNode;

  if (gamestate.phase === "choosing") {
    if (!gamestate.chosen[name]) {
      content = (
        <>
          Choose a card from your hand.{" "}
          <button onClick={lockIn}>lock in</button>
        </>
      );
    } else {
      content = "Waiting for other players.";
    }
  } else if (gamestate.phase === "playing") {
    if (gamestate.players.indexOf(name) === gamestate.currentPlayerIndex) {
      content = (
        <>
          Choose a space to place a diamond or move your boat.
          <button onClick={lockIn}>lock in</button>
        </>
      );
    } else {
      content = `Waiting on ${
        gamestate.players[gamestate.currentPlayerIndex]
      }...`;
    }
  } else {
    if (gamestate.players.indexOf(name) === gamestate.currentPlayerIndex) {
      content = (
        <>
          Choose an extra card to perform a bonus action.
          <button onClick={chooseExtra}>lock in</button>
        </>
      );
    } else {
      content = `Waiting on ${
        gamestate.players[gamestate.currentPlayerIndex]
      }...`;
    }
  }

  return (
    <div className={styles.infoBar}>
      <div className={styles.divider} />
      <div className={styles.content}>{content}</div>
      <div className={styles.divider} />
    </div>
  );
};
