export type CardData = { value: number } & (
  | {
      location: "Residences" | "Harbor";
    }
  | {
      location: "Workshops";
      symbol: "quartz" | "ash" | "lime" | "pigments";
    }
  | {
      location: "TownspeopleA";
      symbol: "lion" | "coin" | "cross";
    }
  | {
      location: "TownspeopleB";
      symbol: "fish" | "shell" | "crab";
    }
  | {
      location: "Trade";
      symbol: "glasses" | "carafes" | "jewelry" | "swans";
    }
);

export type PlayerColor = "red" | "orange" | "green" | "purple";

export type Gamestate = {
  id: string;
  phase: "choosing" | "playing" | "extra-choosing";
  firstPlayerIndex: number;
  currentPlayerIndex: number;
  players: Array<string>;
  playerCount: number;
  playerColors: { [key: string]: PlayerColor };
  deck: Array<CardData>;
  Workshops: Array<PlayerColor | null>;
  Residences: Array<PlayerColor | null>;
  TownspeopleA: Array<PlayerColor | null>;
  TownspeopleB: Array<PlayerColor | null>;
  Trade: Array<PlayerColor | null>;
  Harbor: Array<PlayerColor | null>;
  ships: { [key: string]: number };
  diamonds: { [key: string]: number };
  bonus: {
    Workshops: Array<PlayerColor>;
    Residences: Array<PlayerColor>;
    TownspeopleA: Array<PlayerColor>;
    TownspeopleB: Array<PlayerColor>;
    Trade: Array<PlayerColor>;
  };
  scores: { [key: string]: number };
  hands: Array<Array<CardData>>;
  extras: Array<CardData>;
  chosen: { [key: string]: CardData };
};

export interface ServerToClientEvents {
  "send-waiting-players": (
    players: Array<{ name: string; color: PlayerColor | null }>
  ) => void;
  "send-gamestate": (game: Gamestate) => void;
}

export interface ClientToServerEvents {
  "start-game": () => void;
  "choose-name": (name: string) => void;
  "choose-color": (name: string, color: PlayerColor) => void;
  "lock-in": (index: number, name: string, id: string) => void;
  "choose-space": (space: number, name: string, id: string) => void;
  "choose-extra": (index: number, id: string) => void;
  reconnect: (id: string) => void;
}

export interface InterServerEvents {}

export interface SocketData {
  displayName: string;
}

export type Coordinate = {
  x: number;
  y: number;
};
