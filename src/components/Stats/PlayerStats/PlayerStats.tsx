import { FC, useContext } from "react";
import styles from "./PlayerStats.module.scss";
import red from "../../../assets/stats/red.png";
import orange from "../../../assets/stats/orange.png";
import green from "../../../assets/stats/green.png";
import purple from "../../../assets/stats/purple.png";
import { PlayerColor } from "../../../../../server/types";
import { GameContext } from "../../../App";
import doge from "../../../assets/cards/doge.jpg";

const images = {
  red,
  orange,
  green,
  purple,
};

export interface PlayerStatsProps {
  color: PlayerColor;
}

export const PlayerStats: FC<PlayerStatsProps> = ({ color }) => {
  const state = useContext(GameContext);

  if (state?.gamestate === undefined) {
    return undefined;
  }

  const { gamestate } = state;

  const name = Object.entries(gamestate.playerColors).find(pc => pc[1] === color)![0];
  const index = gamestate.players.indexOf(name);

  return (
    <div className={styles.playerStats}>
      <img src={images[color]} />
      {index === gamestate.firstPlayerIndex ? <img className={styles.doge} src={doge} /> : undefined}
      <div className={styles.name}>{name}</div>
      <div className={styles.stat}>{gamestate.diamonds[name]}</div>
      <div className={styles.stat}>{gamestate.scores[name]}</div>
    </div>
  );
};
