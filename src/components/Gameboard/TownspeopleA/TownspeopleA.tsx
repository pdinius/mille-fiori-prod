import { FC, useContext } from "react";
import { GameContext } from "../../../App";
import { diamondPath, diamonds } from "../../../diamonds";

const bonusCoordinates = [
  {
    x: 2475.1,
    y: 1614.79,
  },
  {
    x: 2558.6,
    y: 1510.79,
  },
  {
    x: 2390.6,
    y: 1510.79,
  },
  {
    x: 2474.6,
    y: 1405.29,
  },
];

const gridCoordinates = [
  {
    x: 1851.02,
    y: 1505.5,
  },
  {
    x: 2023.33,
    y: 1505.5,
  },
  {
    x: 2195.98,
    y: 1506.15,
  },
  {
    x: 1763.01,
    y: 1623.27,
  },
  {
    x: 1936.37,
    y: 1624.27,
  },
  {
    x: 2108.71,
    y: 1625.92,
  },
  {
    x: 2281.71,
    y: 1626.27,
  },
  {
    x: 1675.7,
    y: 1742.03,
  },
  {
    x: 1848.71,
    y: 1743.65,
  },
  {
    x: 2022.06,
    y: 1744.65,
  },
  {
    x: 2195.71,
    y: 1745.65,
  },
  {
    x: 2368.71,
    y: 1746.65,
  },
];

export const TownspeopleA: FC = () => {
  const state = useContext(GameContext);

  if (state?.gamestate === undefined) {
    return <></>;
  }

  const { name, gamestate, chooseSpace } = state;
  const chosen = gamestate.chosen[name];

  const clickablePrecheck =
    gamestate.phase === "playing" &&
    name === gamestate.players[gamestate.currentPlayerIndex] &&
    chosen.location === "TownspeopleA";

  const clickable = (index: number) => {
    if (!clickablePrecheck || gamestate.TownspeopleA[index] !== null)
      return false;
    if (index < 3) {
      return (
        gamestate.TownspeopleA[index + 3] && gamestate.TownspeopleA[index + 4]
      );
    } else if (index < 7) {
      return (
        gamestate.TownspeopleA[index + 4] && gamestate.TownspeopleA[index + 5]
      );
    } else {
      return true;
    }
  };

  return state === undefined ? <></> : (
    <>
      {/* POINTS */}
      {gamestate.bonus.TownspeopleA.map((color, i) => (
        <image key={i} href={diamonds[color]} {...bonusCoordinates[i]} />
      ))}
      {/* GRID */}
      {gamestate.TownspeopleA.map((color, i) =>
        clickable(i) ? (
          <path
            d={diamondPath(gridCoordinates[i])}
            className="clickable"
            onClick={() => chooseSpace(i)}
          />
        ) : color ? (
          <image key={i} href={diamonds[color]} {...gridCoordinates[i]} />
        ) : undefined
      )}
    </>
  );
};
