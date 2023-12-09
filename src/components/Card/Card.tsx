import { FC } from "react";
import styles from "./Card.module.scss";
import { CardData } from "../../../../deck";
import harbor1 from "../../assets/cards/Harbor-1.jpg";
import harbor2 from "../../assets/cards/Harbor-2.jpg";
import harbor3 from "../../assets/cards/Harbor-3.jpg";
import harbor4 from "../../assets/cards/Harbor-4.jpg";
import harbor5 from "../../assets/cards/Harbor-5.jpg";
import residences1 from "../../assets/cards/Residences-1.jpg";
import residences2 from "../../assets/cards/Residences-2.jpg";
import residences3 from "../../assets/cards/Residences-3.jpg";
import residences4 from "../../assets/cards/Residences-4.jpg";
import residences5 from "../../assets/cards/Residences-5.jpg";
import townspeopleAcoin1 from "../../assets/cards/TownspeopleA-coin-1.jpg";
import townspeopleAcoin2 from "../../assets/cards/TownspeopleA-coin-2.jpg";
import townspeopleAcoin3 from "../../assets/cards/TownspeopleA-coin-3.jpg";
import townspeopleAcoin4 from "../../assets/cards/TownspeopleA-coin-4.jpg";
import townspeopleAcoin5 from "../../assets/cards/TownspeopleA-coin-5.jpg";
import townspeopleAcross1 from "../../assets/cards/TownspeopleA-cross-1.jpg";
import townspeopleAcross2 from "../../assets/cards/TownspeopleA-cross-2.jpg";
import townspeopleAcross3 from "../../assets/cards/TownspeopleA-cross-3.jpg";
import townspeopleAcross4 from "../../assets/cards/TownspeopleA-cross-4.jpg";
import townspeopleAcross5 from "../../assets/cards/TownspeopleA-cross-5.jpg";
import townspeopleAlion1 from "../../assets/cards/TownspeopleA-lion-1.jpg";
import townspeopleAlion2 from "../../assets/cards/TownspeopleA-lion-2.jpg";
import townspeopleAlion3 from "../../assets/cards/TownspeopleA-lion-3.jpg";
import townspeopleAlion4 from "../../assets/cards/TownspeopleA-lion-4.jpg";
import townspeopleAlion5 from "../../assets/cards/TownspeopleA-lion-5.jpg";
import townspeopleBcrab1 from "../../assets/cards/TownspeopleB-crab-1.jpg";
import townspeopleBcrab2 from "../../assets/cards/TownspeopleB-crab-2.jpg";
import townspeopleBcrab3 from "../../assets/cards/TownspeopleB-crab-3.jpg";
import townspeopleBcrab4 from "../../assets/cards/TownspeopleB-crab-4.jpg";
import townspeopleBcrab5 from "../../assets/cards/TownspeopleB-crab-5.jpg";
import townspeopleBfish1 from "../../assets/cards/TownspeopleB-fish-1.jpg";
import townspeopleBfish2 from "../../assets/cards/TownspeopleB-fish-2.jpg";
import townspeopleBfish3 from "../../assets/cards/TownspeopleB-fish-3.jpg";
import townspeopleBfish4 from "../../assets/cards/TownspeopleB-fish-4.jpg";
import townspeopleBfish5 from "../../assets/cards/TownspeopleB-fish-5.jpg";
import townspeopleBshell1 from "../../assets/cards/TownspeopleB-shell-1.jpg";
import townspeopleBshell2 from "../../assets/cards/TownspeopleB-shell-2.jpg";
import townspeopleBshell3 from "../../assets/cards/TownspeopleB-shell-3.jpg";
import townspeopleBshell4 from "../../assets/cards/TownspeopleB-shell-4.jpg";
import townspeopleBshell5 from "../../assets/cards/TownspeopleB-shell-5.jpg";
import tradeCarafes1 from "../../assets/cards/Trade-carafes-1.jpg";
import tradeCarafes2 from "../../assets/cards/Trade-carafes-2.jpg";
import tradeCarafes3 from "../../assets/cards/Trade-carafes-3.jpg";
import tradeCarafes4 from "../../assets/cards/Trade-carafes-4.jpg";
import tradeCarafes5 from "../../assets/cards/Trade-carafes-5.jpg";
import tradeGlasses1 from "../../assets/cards/Trade-glasses-1.jpg";
import tradeGlasses2 from "../../assets/cards/Trade-glasses-2.jpg";
import tradeGlasses3 from "../../assets/cards/Trade-glasses-3.jpg";
import tradeGlasses4 from "../../assets/cards/Trade-glasses-4.jpg";
import tradeGlasses5 from "../../assets/cards/Trade-glasses-5.jpg";
import tradeJewelry1 from "../../assets/cards/Trade-jewelry-1.jpg";
import tradeJewelry2 from "../../assets/cards/Trade-jewelry-2.jpg";
import tradeJewelry3 from "../../assets/cards/Trade-jewelry-3.jpg";
import tradeJewelry4 from "../../assets/cards/Trade-jewelry-4.jpg";
import tradeJewelry5 from "../../assets/cards/Trade-jewelry-5.jpg";
import tradeSwans1 from "../../assets/cards/Trade-swans-1.jpg";
import tradeSwans2 from "../../assets/cards/Trade-swans-2.jpg";
import tradeSwans3 from "../../assets/cards/Trade-swans-3.jpg";
import tradeSwans4 from "../../assets/cards/Trade-swans-4.jpg";
import tradeSwans5 from "../../assets/cards/Trade-swans-5.jpg";
import workshopsAsh1 from "../../assets/cards/Workshops-ash-1.jpg";
import workshopsAsh2 from "../../assets/cards/Workshops-ash-2.jpg";
import workshopsAsh3 from "../../assets/cards/Workshops-ash-3.jpg";
import workshopsAsh4 from "../../assets/cards/Workshops-ash-4.jpg";
import workshopsAsh5 from "../../assets/cards/Workshops-ash-5.jpg";
import workshopsLime1 from "../../assets/cards/Workshops-lime-1.jpg";
import workshopsLime2 from "../../assets/cards/Workshops-lime-2.jpg";
import workshopsLime3 from "../../assets/cards/Workshops-lime-3.jpg";
import workshopsLime4 from "../../assets/cards/Workshops-lime-4.jpg";
import workshopsLime5 from "../../assets/cards/Workshops-lime-5.jpg";
import workshopsPigments1 from "../../assets/cards/Workshops-pigments-1.jpg";
import workshopsPigments2 from "../../assets/cards/Workshops-pigments-2.jpg";
import workshopsPigments3 from "../../assets/cards/Workshops-pigments-3.jpg";
import workshopsPigments4 from "../../assets/cards/Workshops-pigments-4.jpg";
import workshopsPigments5 from "../../assets/cards/Workshops-pigments-5.jpg";
import workshopsQuartz1 from "../../assets/cards/Workshops-quartz-1.jpg";
import workshopsQuartz2 from "../../assets/cards/Workshops-quartz-2.jpg";
import workshopsQuartz3 from "../../assets/cards/Workshops-quartz-3.jpg";
import workshopsQuartz4 from "../../assets/cards/Workshops-quartz-4.jpg";
import workshopsQuartz5 from "../../assets/cards/Workshops-quartz-5.jpg";

const images: { [key: string]: string } = {
  "Harbor-1": harbor1,
  "Harbor-2": harbor2,
  "Harbor-3": harbor3,
  "Harbor-4": harbor4,
  "Harbor-5": harbor5,
  "Residences-1": residences1,
  "Residences-2": residences2,
  "Residences-3": residences3,
  "Residences-4": residences4,
  "Residences-5": residences5,
  "TownspeopleA-coin-1": townspeopleAcoin1,
  "TownspeopleA-coin-2": townspeopleAcoin2,
  "TownspeopleA-coin-3": townspeopleAcoin3,
  "TownspeopleA-coin-4": townspeopleAcoin4,
  "TownspeopleA-coin-5": townspeopleAcoin5,
  "TownspeopleA-cross-1": townspeopleAcross1,
  "TownspeopleA-cross-2": townspeopleAcross2,
  "TownspeopleA-cross-3": townspeopleAcross3,
  "TownspeopleA-cross-4": townspeopleAcross4,
  "TownspeopleA-cross-5": townspeopleAcross5,
  "TownspeopleA-lion-1": townspeopleAlion1,
  "TownspeopleA-lion-2": townspeopleAlion2,
  "TownspeopleA-lion-3": townspeopleAlion3,
  "TownspeopleA-lion-4": townspeopleAlion4,
  "TownspeopleA-lion-5": townspeopleAlion5,
  "TownspeopleB-crab-1": townspeopleBcrab1,
  "TownspeopleB-crab-2": townspeopleBcrab2,
  "TownspeopleB-crab-3": townspeopleBcrab3,
  "TownspeopleB-crab-4": townspeopleBcrab4,
  "TownspeopleB-crab-5": townspeopleBcrab5,
  "TownspeopleB-fish-1": townspeopleBfish1,
  "TownspeopleB-fish-2": townspeopleBfish2,
  "TownspeopleB-fish-3": townspeopleBfish3,
  "TownspeopleB-fish-4": townspeopleBfish4,
  "TownspeopleB-fish-5": townspeopleBfish5,
  "TownspeopleB-shell-1": townspeopleBshell1,
  "TownspeopleB-shell-2": townspeopleBshell2,
  "TownspeopleB-shell-3": townspeopleBshell3,
  "TownspeopleB-shell-4": townspeopleBshell4,
  "TownspeopleB-shell-5": townspeopleBshell5,
  "Trade-carafes-1": tradeCarafes1,
  "Trade-carafes-2": tradeCarafes2,
  "Trade-carafes-3": tradeCarafes3,
  "Trade-carafes-4": tradeCarafes4,
  "Trade-carafes-5": tradeCarafes5,
  "Trade-glasses-1": tradeGlasses1,
  "Trade-glasses-2": tradeGlasses2,
  "Trade-glasses-3": tradeGlasses3,
  "Trade-glasses-4": tradeGlasses4,
  "Trade-glasses-5": tradeGlasses5,
  "Trade-jewelry-1": tradeJewelry1,
  "Trade-jewelry-2": tradeJewelry2,
  "Trade-jewelry-3": tradeJewelry3,
  "Trade-jewelry-4": tradeJewelry4,
  "Trade-jewelry-5": tradeJewelry5,
  "Trade-swans-1": tradeSwans1,
  "Trade-swans-2": tradeSwans2,
  "Trade-swans-3": tradeSwans3,
  "Trade-swans-4": tradeSwans4,
  "Trade-swans-5": tradeSwans5,
  "Workshops-ash-1": workshopsAsh1,
  "Workshops-ash-2": workshopsAsh2,
  "Workshops-ash-3": workshopsAsh3,
  "Workshops-ash-4": workshopsAsh4,
  "Workshops-ash-5": workshopsAsh5,
  "Workshops-lime-1": workshopsLime1,
  "Workshops-lime-2": workshopsLime2,
  "Workshops-lime-3": workshopsLime3,
  "Workshops-lime-4": workshopsLime4,
  "Workshops-lime-5": workshopsLime5,
  "Workshops-pigments-1": workshopsPigments1,
  "Workshops-pigments-2": workshopsPigments2,
  "Workshops-pigments-3": workshopsPigments3,
  "Workshops-pigments-4": workshopsPigments4,
  "Workshops-pigments-5": workshopsPigments5,
  "Workshops-quartz-1": workshopsQuartz1,
  "Workshops-quartz-2": workshopsQuartz2,
  "Workshops-quartz-3": workshopsQuartz3,
  "Workshops-quartz-4": workshopsQuartz4,
  "Workshops-quartz-5": workshopsQuartz5,
};

export interface CardProps {
  data: CardData;
  clickable?: boolean;
  onClick?: React.MouseEventHandler;
  selected: boolean;
  size?: "small" | "normal";
}

export const Card: FC<CardProps> = ({
  data,
  clickable,
  onClick,
  selected,
  size,
}) => {
  const imageName: Array<string> = [data.location];

  if ("symbol" in data) {
    imageName.push(data.symbol);
  }

  imageName.push(String(data.value));

  return (
    <img
      className={`${styles.card} ${
        selected ? styles.selected : clickable ? styles.clickable : ""
      } ${size === "small" ? styles.smallCard : ""}`}
      onClick={clickable ? onClick : undefined}
      src={images[imageName.join("-")]}
    />
  );
};
