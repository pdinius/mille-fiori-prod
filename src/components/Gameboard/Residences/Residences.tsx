import { FC, useContext } from "react";
import { GameContext } from "../../../App";
import { diamondPath, diamonds } from "../../../diamonds";

const bonusCoordinates = [
  {
    x: 2549.6,
    y: 589.79,
  },
  {
    x: 2633.1,
    y: 485.79,
  },
  {
    x: 2465.1,
    y: 485.79,
  },
  {
    x: 2549.1,
    y: 380.29,
  },
];

const gridCoordinates = [
  {
    x: 1971.94,
    y: 48.62,
  },
  {
    x: 2139.94,
    y: 48.62,
  },
  {
    x: 2307.94,
    y: 48.62,
  },
  {
    x: 2476.44,
    y: 48.62,
  },
  {
    x: 2662.89,
    y: 73.73,
  },
  {
    x: 2837.72,
    y: 183.43,
  },
  {
    x: 2929.3,
    y: 368.75,
  },
  {
    x: 2945.3,
    y: 556.37,
  },
  {
    x: 2945.3,
    y: 723.37,
  },
  {
    x: 2945.3,
    y: 891.87,
  },
  {
    x: 2945.3,
    y: 1059.37,
  },
  {
    x: 2945.3,
    y: 1228.38,
  },
  {
    x: 2945.3,
    y: 1395.38,
  },
  {
    x: 2945.3,
    y: 1565.38,
  },
  {
    x: 2945.3,
    y: 1735.88,
  },
  {
    x: 2944.3,
    y: 1902.38,
  },
  {
    x: 2944.3,
    y: 2071.88,
  },
  {
    x: 2944.3,
    y: 2239.38,
  },
  {
    x: 2944.3,
    y: 2409.38,
  },
  {
    x: 2943.8,
    y: 2576.88,
  },
];

export const Residences: FC = () => {
  const state = useContext(GameContext);

  if (state?.gamestate === undefined) {
    return <></>;
  }

  const { name, gamestate, chooseSpace } = state;
  const chosen = gamestate.chosen[name];

  const clickablePrecheck =
    gamestate.phase === "playing" &&
    name === gamestate.players[gamestate.currentPlayerIndex] &&
    chosen.location === "Residences";

  const clickable = (index: number) => {
    if (!clickablePrecheck) return false;
    return (
      gamestate.Residences[index] === null &&
      gamestate.Residences[index - 1] !== null
    );
  };

  const transformString = (index: number) => {
    if (index < 4) {
      return undefined;
    } else if (index > 6) {
      return `rotate(90 ${gridCoordinates[index].x + 76} ${
        gridCoordinates[index].y + 89
      }) translate(-101 62)`;
    } else {
      return {
        4: `rotate(14.5 ${gridCoordinates[index].x + 76} ${
          gridCoordinates[index].y + 89
        }) translate(-21 -5)`,
        5: `rotate(45 ${gridCoordinates[index].x + 76} ${
          gridCoordinates[index].y + 89
        }) translate(-62 9)`,
        6: `rotate(75.5 ${gridCoordinates[index].x + 76} ${
          gridCoordinates[index].y + 89
        }) translate(-93 42)`,
      }[index];
    }
  };

  return state === undefined ? <></> : (
    <>
      {/* POINTS */}
      {gamestate.bonus.Residences.map((color, i) => (
        <image key={i} href={diamonds[color]} {...bonusCoordinates[i]} />
      ))}
      {/* GRID */}
      {gamestate.Residences.map((color, i) =>
        clickable(i) ? (
          <path
            key={i}
            transform={transformString(i)}
            d={diamondPath(gridCoordinates[i])}
            className="clickable"
            onClick={() => chooseSpace(i)}
          />
        ) : color ? (
          <image
            transform={transformString(i)}
            key={i}
            href={diamonds[color]}
            {...gridCoordinates[i]}
          />
        ) : undefined
      )}
    </>
  );
};
