import { FC, useState } from "react";
import styles from "./Game.module.scss";
import { Gameboard } from "../Gameboard/Gameboard";
import { Hand } from "../Hand/Hand";
import { Extras } from "../Extras/Extras";
import { InfoBar } from "../InfoBar/InfoBar";

export const Game: FC = () => {
  const [selected, setSelected] = useState(-1);
  const [selectedExtra, setSelectedExtra] = useState(-1);

  return (
    <>
      <InfoBar
        selectedCard={selected}
        setSelectedCard={setSelected}
        selectedExtra={selectedExtra}
        setSelectedExtra={setSelectedExtra}
      />
      <div className={styles.game}>
        <div className={styles.left}>
          <Hand selected={selected} setSelected={setSelected} />
          <Gameboard />
        </div>
        <div className={styles.right}>
          <Extras selected={selectedExtra} setSelected={setSelectedExtra} />
        </div>
      </div>
    </>
  );
};
