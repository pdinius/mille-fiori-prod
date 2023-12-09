import { FC } from "react";
import styles from "./Gameboard.module.scss";
import board from "../../assets/game-board.png";
import { Workshops } from "./Workshops/Workshops";
import { Residences } from "./Residences/Residences";
import { TownspeopleA } from "./TownspeopleA/TownspeopleA";
import { TownspeopleB } from "./TownspeopleB/TownspeopleB";
import { Trade } from "./Trade/Trade";
import { Harbor } from "./Harbor/Harbor";

export const Gameboard: FC = () => {
  return (
    <div className={styles.gameboard}>
      <svg viewBox="0 0 3097 3106" className={styles.canvas}>
        <image href={board} width={3097} />
        <Workshops />
        <Residences />
        <TownspeopleA />
        <TownspeopleB />
        <Trade />
        <Harbor />
      </svg>
    </div>
  );
};
