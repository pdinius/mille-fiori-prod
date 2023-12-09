import { FC, useContext } from "react";
import styles from "./Extras.module.scss";
import { GameContext } from "../../App";
import { Card } from "../Card/Card";

interface ExtrasProps {
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
}

export const Extras: FC<ExtrasProps> = ({ selected, setSelected }) => {
  const state = useContext(GameContext);

  if (state?.gamestate === undefined) {
    return undefined;
  }

  const { name, gamestate } = state;

  return (
    <div className={styles.extras}>
      {state.gamestate.extras.map((card, i) => (
        <Card
          key={i}
          data={card}
          clickable={
            gamestate.phase === "extra-choosing" &&
            gamestate.players[gamestate.currentPlayerIndex] === name
          }
          onClick={() => setSelected(i)}
          selected={selected === i}
          size="small"
        />
      ))}
    </div>
  );
};
