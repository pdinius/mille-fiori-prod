import { FC, useContext } from "react";
import styles from "./Stats.module.scss";
import { GameContext } from "../../App";
import { PlayerStats } from "./PlayerStats/PlayerStats";

export const Stats: FC = () => {
  const state = useContext(GameContext);

  if (state?.gamestate === undefined) {
    return undefined;
  }

  const { gamestate } = state;

  return (
    <div className={styles.stats}>
      {gamestate.players.map((player, i) => {
        return <PlayerStats key={i} color={gamestate.playerColors[player]} />;
      })}
    </div>
  );
};
