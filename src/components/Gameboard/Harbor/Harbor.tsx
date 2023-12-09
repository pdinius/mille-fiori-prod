import { FC, useContext } from "react";
import { GameContext } from "../../../App";
import { diamondPath, diamonds } from "../../../diamonds";

const gridCoordinates = [
  {
    x: 83.26,
    y: 1377.67,
  },
  {
    x: 251.26,
    y: 1378.67,
  },
  {
    x: 419.76,
    y: 1378.17,
  },
  {
    x: 84.76,
    y: 1587.17,
  },
  {
    x: 252.76,
    y: 1588.17,
  },
  {
    x: 420.26,
    y: 1587.67,
  },
  {
    x: 83.76,
    y: 1797.67,
  },
  {
    x: 251.76,
    y: 1798.67,
  },
  {
    x: 419.26,
    y: 1798.17,
  },
  {
    x: 83.26,
    y: 2009.17,
  },
  {
    x: 251.26,
    y: 2010.17,
  },
  {
    x: 418.76,
    y: 2009.67,
  },
  {
    x: 82.26,
    y: 2220.32,
  },
  {
    x: 250.26,
    y: 2221.32,
  },
  {
    x: 417.76,
    y: 2220.82,
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

export const Harbor: FC = () => {
  const state = useContext(GameContext);

  if (state?.gamestate === undefined) {
    return undefined;
  }

  const { name, gamestate, chooseSpace } = state;
  const chosen = gamestate.chosen[name];

  const clickablePrecheck =
    gamestate.phase === "playing" &&
    name === gamestate.players[gamestate.currentPlayerIndex] &&
    chosen.location === "Harbor";

  const clickable = (index: number) => {
    return clickablePrecheck && gamestate.Harbor[index] === null;
  };

  return state === undefined ? undefined : (
    <>
      {gamestate.Harbor.map((color, i) =>
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
