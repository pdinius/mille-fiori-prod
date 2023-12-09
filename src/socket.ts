import { io, Socket } from "socket.io-client";
import { ClientToServerEvents, ServerToClientEvents } from "./types";

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
  `http://localhost:3000`
);
localStorage.clear();
const id = localStorage.getItem("game-id");

if (id) {
  socket.emit("reconnect", id);
}

export default socket;
