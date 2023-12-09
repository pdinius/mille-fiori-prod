import { FC, useContext } from "react";
import { GameContext } from "../../../App";
import { diamondPath, diamonds } from "../../../diamonds";

const bonusCoordinates = [
  {
    x: 1314.6,
    y: 1799.5,
  },
  {
    x: 1230.6,
    y: 1905,
  },
  {
    x: 1398.6,
    y: 1905,
  },
  {
    x: 1315.1,
    y: 2009,
  },
];

const gridCoordinates = [
  {
    x: 613.76,
    y: 1381.17,
  },
  {
    x: 780.76,
    y: 1381.17,
  },
  {
    x: 947.76,
    y: 1381.17,
  },
  {
    x: 1114.76,
    y: 1381.17,
  },
  {
    x: 613.26,
    y: 1589.17,
  },
  {
    x: 780.26,
    y: 1589.17,
  },
  {
    x: 947.26,
    y: 1589.17,
  },
  {
    x: 1114.26,
    y: 1589.17,
  },
  {
    x: 612.26,
    y: 1800.17,
  },
  {
    x: 779.26,
    y: 1800.17,
  },
  {
    x: 946.26,
    y: 1800.17,
  },
  {
    x: 1113.26,
    y: 1800.17,
  },
  {
    x: 611.26,
    y: 2010.17,
  },
  {
    x: 778.26,
    y: 2010.17,
  },
  {
    x: 945.26,
    y: 2010.17,
  },
  {
    x: 1112.26,
    y: 2010.17,
  },
  {
    x: 611.26,
    y: 2221.67,
  },
  {
    x: 778.26,
    y: 2221.67,
  },
  {
    x: 945.26,
    y: 2221.67,
  },
  {
    x: 1112.26,
    y: 2221.67,
  },
];

const mods = {
  glasses: 0,
  carafes: 1,
  jewelry: 2,
  swans: 3,
};

export const Trade: FC = () => {
  const state = useContext(GameContext);

  if (state?.gamestate === undefined) {
    return undefined;
  }

  const { name, gamestate, chooseSpace } = state;
  const chosen = gamestate.chosen[name];

  const clickablePrecheck =
    gamestate.phase === "playing" &&
    name === gamestate.players[gamestate.currentPlayerIndex] &&
    chosen.location === "Trade";

  const clickable = (index: number) => {
    if (!clickablePrecheck) return false;
    return index % 4 === mods[chosen.symbol];
  };

  return state === undefined ? undefined : (
    <>
      {/* POINTS */}
      {gamestate.bonus.Trade.map((color, i) => (
        <image key={i} href={diamonds[color]} {...bonusCoordinates[i]} />
      ))}
      {/* GRID */}
      {gamestate.Trade.map((color, i) =>
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
