import { FC, useContext } from "react";
import { GameContext } from "../../../App";
import { diamondPath, diamonds } from "../../../diamonds";

const bonusCoordinates = [
  {
    x: 1914.6,
    y: 657.79,
  },
  {
    x: 1998.1,
    y: 553.79,
  },
  {
    x: 1830.1,
    y: 553.79,
  },
  {
    x: 1914.1,
    y: 448.29,
  },
];
// 131 132
const gridCoordinates = [
  { x: 178, y: 354 },
  {
    x: 373.6,
    y: 355.54,
  },
  {
    x: 568.1,
    y: 356.04,
  },
  {
    x: 763.6,
    y: 357.04,
  },
  {
    x: 958.6,
    y: 357.54,
  },
  {
    x: 1153.6,
    y: 357.54,
  },
  {
    x: 1542.26,
    y: 359.29,
  },
  {
    x: 80.1,
    y: 536.79,
  },
  {
    x: 275.6,
    y: 537.79,
  },
  {
    x: 470.85,
    y: 538.04,
  },
  {
    x: 665.85,
    y: 539.04,
  },
  {
    x: 860.6,
    y: 539.79,
  },
  {
    x: 1055.6,
    y: 539.79,
  },
  {
    x: 1445.26,
    y: 540.79,
  },
  {
    x: 1640.11,
    y: 541.29,
  },
  {
    x: 178.77,
    y: 719.21,
  },
  {
    x: 374.27,
    y: 720.21,
  },
  {
    x: 763.77,
    y: 721.12,
  },
  {
    x: 958.26,
    y: 722.12,
  },
  {
    x: 1154.18,
    y: 722.37,
  },
  {
    x: 1347.86,
    y: 722.71,
  },
  {
    x: 1542.26,
    y: 723.79,
  },
  {
    x: 1737.61,
    y: 723.79,
  },
  {
    x: 276.27,
    y: 902.46,
  },
  {
    x: 666.52,
    y: 902.87,
  },
  {
    x: 861.51,
    y: 903.87,
  },
  {
    x: 1056.68,
    y: 904.12,
  },
  {
    x: 1250.86,
    y: 904.71,
  },
  {
    x: 1445.26,
    y: 905.29,
  },
  {
    x: 1640.11,
    y: 905.79,
  },
];

const workshopSymbols = [
  "pigments",
  "ash",
  "pigments",
  "lime",
  "ash",
  "lime",
  "ash",
  "quartz",
  "lime",
  "quartz",
  "ash",
  "pigments",
  "quartz",
  "pigments",
  "quartz",
  "pigments",
  "ash",
  "quartz",
  "lime",
  "pigments",
  "quartz",
  "lime",
  "pigments",
  "quartz",
  "lime",
  "pigments",
  "ash",
  "lime",
  "pigments",
  "ash",
];

export const Workshops: FC = () => {
  const state = useContext(GameContext);

  if (state?.gamestate === undefined) {
    return undefined;
  }

  const { name, gamestate, chooseSpace } = state;
  const chosen = gamestate.chosen[name];

  const clickablePrecheck =
    gamestate.phase === "playing" &&
    name === gamestate.players[gamestate.currentPlayerIndex] &&
    chosen.location === "Workshops";

  const clickable = (index: number) => {
    if (!clickablePrecheck) return false;
    return (
      gamestate.Workshops[index] === null &&
      workshopSymbols[index] === chosen.symbol
    );
  };

  return state === undefined ? undefined : (
    <>
      {/* POINTS */}
      {gamestate.bonus.Workshops.map((color, i) => (
        <image key={i} href={diamonds[color]} {...bonusCoordinates[i]} />
      ))}
      {/* GRID */}
      {gamestate.Workshops.map((color, i) =>
        clickable(i) ? (
          <path
            key={i}
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
