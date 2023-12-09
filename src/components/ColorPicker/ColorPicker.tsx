import { FC } from "react";
import styles from "./ColorPicker.module.scss";
import { diamondThumbs } from "../../diamonds";
import socket from "../../socket";
import { PlayerColor } from "../../types";

export interface ColorPickerProps {
  name: string;
  lobbyPlayers: Array<{
    name: string;
    color: PlayerColor | null;
  }>;
}

export const ColorPicker: FC<ColorPickerProps> = ({ name, lobbyPlayers }) => {
  const usedColors = lobbyPlayers.map((v) => v.color);

  return (
    <div className={styles.colorPicker}>
      {Object.keys(diamondThumbs).map((color, i) => {
        if (color === "blank") return undefined;
        const pColor = color as PlayerColor;
        return (
          <img
            key={i}
            className={
              usedColors.includes(pColor)
                ? styles.unavailable
                : styles.available
            }
            src={diamondThumbs[pColor]}
            onClick={
              usedColors.includes(pColor)
                ? undefined
                : () => socket.emit("choose-color", name, pColor)
            }
          />
        );
      })}
    </div>
  );
};
