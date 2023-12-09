import { createContext, useEffect, useState } from "react";
import styles from "./App.module.scss";
import socket from "./socket";
import { Gamestate } from "../../server/types";
import { Corner, CornerProps } from "./components/Corner/Corner";
import { Lobby } from "./components/Lobby/Lobby";
import { Stats } from "./components/Stats/Stats";
import { Game } from "./components/Game/Game";

const CORNERS: Array<CornerProps["which"]> = [
  "top-left",
  "top-right",
  "bottom-left",
  "bottom-right",
];

export const GameContext = createContext<null | {
  name: string;
  gamestate?: Gamestate;
  chooseSpace: (index: number) => void;
}>(null);

function App() {
  const [name, setName] = useState(localStorage.getItem("name") || "");
  const [gamestate, setGamestate] = useState<Gamestate>();

  useEffect(() => {
    socket.on("send-gamestate", (game) => {
      localStorage.setItem("game-id", game.id);
      setGamestate(game);
    });

    return () => {
      socket.off("send-gamestate");
    };
  });

  const chooseSpace = (index: number) => {
    if (!gamestate?.id) {
      throw Error("Gamestate id is undefined.");
    }
    socket.emit("choose-space", index, name, gamestate.id);
  };

  return (
    <div className={styles.container}>
      {CORNERS.map((c, i) => (
        <Corner key={i} which={c} />
      ))}
      {gamestate ? (
        <GameContext.Provider value={{ name, gamestate, chooseSpace }}>
          <Stats />
          <Game />
        </GameContext.Provider>
      ) : (
        <Lobby name={name} setName={setName} />
      )}
    </div>
  );
}

export default App;
