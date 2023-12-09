import { FC, useEffect, useRef, useState } from "react";
import styles from "./Lobby.module.scss";
import socket from "../../socket";
import { PlayerColor } from "../../../../server/types";
import intro from "../../assets/intro-bg.jpg";
import { Elipses } from "../Elipses/Elipses";
import { ColorPicker } from "../ColorPicker/ColorPicker";
import { diamondThumbs } from "../../diamonds";

interface LobbyProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}

export const Lobby: FC<LobbyProps> = ({ name, setName }) => {
  const [lobbyPlayers, setLobbyPlayers] = useState<
    Array<{
      name: string;
      color: PlayerColor | null;
    }>
  >([]);

  const nameInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    socket.on("send-waiting-players", (players) => {
      setLobbyPlayers(players);
    });

    return () => {
      socket.off("send-waiting-players");
    };
  }, []);

  const updateName = (e: React.FormEvent) => {
    e.preventDefault();
    if (nameInput.current === null) return;
    localStorage.setItem("name", nameInput.current.value);
    setName(nameInput.current.value);
    socket.emit("choose-name", nameInput.current.value);
  };

  return (
    <>
      <img className={styles.introBg} src={intro} />
      <form className={styles.introForm}>
        <div className={styles.gameTitle}>Mille Fiori</div>
        <input
          ref={nameInput}
          className={styles.nameInput}
          placeholder="name"
        />
        <div className={styles.bottomSection}>
          <div className={styles.lobby}>
            <span className={styles.waitingAnim}>
              waiting players
              <Elipses />
            </span>
            {lobbyPlayers.map((player, i) => (
              <div className={styles.waitingPlayer} key={i}>
                <img
                  src={
                    player.color === null
                      ? diamondThumbs.blank
                      : diamondThumbs[player.color]
                  }
                />
                {player.name}
              </div>
            ))}
          </div>
          {name ? (
            <div className={styles.rightSide}>
              <ColorPicker name={name} lobbyPlayers={lobbyPlayers} />
              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  socket.emit("start-game");
                }}
                disabled={
                  lobbyPlayers.length < 2 ||
                  lobbyPlayers.some((lp) => lp.color === null)
                }
              >
                START
              </button>
            </div>
          ) : (
            <button type="submit" onClick={updateName}>
              JOIN
            </button>
          )}
        </div>
      </form>
    </>
  );
};
