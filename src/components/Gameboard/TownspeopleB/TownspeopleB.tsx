import { FC, useContext } from "react";
import { GameContext } from "../../../App";
import { diamondPath, diamonds } from "../../../diamonds";

const bonusCoordinates = [
  {
    x: 1740.1,
    y: 2287.67,
  },
  {
    x: 1823.6,
    y: 2183.67,
  },
  {
    x: 1655.6,
    y: 2183.67,
  },
  {
    x: 1739.6,
    y: 2078.17,
  },
];

const gridCoordinates = [
  {
    x: 2020.52,
    y: 2175,
  },
  {
    x: 2192.83,
    y: 2175,
  },
  {
    x: 2365.48,
    y: 2175.65,
  },
  {
    x: 1932.52,
    y: 2292.77,
  },
  {
    x: 2105.87,
    y: 2293.77,
  },
  {
    x: 2278.21,
    y: 2295.42,
  },
  {
    x: 2451.21,
    y: 2295.77,
  },
  {
    x: 1845.21,
    y: 2411.52,
  },
  {
    x: 2018.21,
    y: 2413.15,
  },
  {
    x: 2191.56,
    y: 2414.15,
  },
  {
    x: 2365.21,
    y: 2415.15,
  },
  {
    x: 2538.21,
    y: 2416.15,
  },
];

export const TownspeopleB: FC = () => {
  const state = useContext(GameContext);

  if (state?.gamestate === undefined) {
    return undefined;
  }

  const { name, gamestate, chooseSpace } = state;
  const chosen = gamestate.chosen[name];

  const clickablePrecheck =
    gamestate.phase === "playing" &&
    name === gamestate.players[gamestate.currentPlayerIndex] &&
    chosen.location === "TownspeopleB";

  const clickable = (index: number) => {
    if (!clickablePrecheck || gamestate.TownspeopleB[index] !== null)
      return false;
    if (index < 3) {
      return (
        gamestate.TownspeopleB[index + 3] && gamestate.TownspeopleB[index + 4]
      );
    } else if (index < 7) {
      return (
        gamestate.TownspeopleB[index + 4] && gamestate.TownspeopleB[index + 5]
      );
    } else {
      return true;
    }
  };

  return state === undefined ? undefined : (
    <>
      {/* POINTS */}
      {gamestate.bonus.TownspeopleB.map((color, i) => (
        <image key={i} href={diamonds[color]} {...bonusCoordinates[i]} />
      ))}
      {/* GRID */}
      {gamestate.TownspeopleB.map((color, i) =>
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
