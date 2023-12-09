import { FC, useContext } from "react";
import styles from "./Hand.module.scss";
import { Card } from "../Card/Card";
import { GameContext } from "../../App";

interface HandProps {
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
}

export const Hand: FC<HandProps> = ({ selected, setSelected }) => {
  const state = useContext(GameContext);

  if (state?.gamestate === undefined) {
    return undefined;
  }

  const { name, gamestate } = state;

  const hand = gamestate.hands[gamestate.players.indexOf(name)];
  const lockedCard = gamestate.chosen[name];

  return (
    <div className={styles.hand}>
      {lockedCard ? (
        <Card data={lockedCard} selected={true} />
      ) : (
        hand.map((card, i) => (
          <Card
            key={i}
            data={card}
            clickable={gamestate.phase === "choosing"}
            selected={selected === i}
            onClick={() => setSelected(i)}
          />
        ))
      )}
    </div>
  );
};
