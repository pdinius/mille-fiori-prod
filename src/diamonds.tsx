import red from "./assets/diamonds/red.png";
import orange from "./assets/diamonds/orange.png";
import green from "./assets/diamonds/green.png";
import purple from "./assets/diamonds/purple.png";

import redThumb from "./assets/diamonds/red_thumb.png";
import orangeThumb from "./assets/diamonds/orange_thumb.png";
import greenThumb from "./assets/diamonds/green_thumb.png";
import purpleThumb from "./assets/diamonds/purple_thumb.png";
import blank from "./assets/diamonds/placeholder.png";

export const diamonds = {
  red,
  orange,
  green,
  purple,
};

export const diamondThumbs = {
  red: redThumb,
  orange: orangeThumb,
  green: greenThumb,
  purple: purpleThumb,
  blank
};

export const diamondPath = ({ x, y }: { x: number; y: number }) =>
  `M${x + 94.82},${
    y + 8.96
  }a22.717,22.717,0,0,0,-35.91,0c-3,3.85,-48.49,60.47,-52.66,65.58a23.528,23.528,0,0,0,-5.12,14.39a22.649,22.649,0,0,0,5.12,14.38c4.17,5.11,49.66,61.91,52.66,65.77a22.733,22.733,0,0,0,35.91,0c3,-3.86,48.03,-60.66,52.2,-65.77a22.649,22.649,0,0,0,5.12,-14.38a23.528,23.528,0,0,0,-5.12,-14.39c-4.17,-5.11,-49.2,-61.73,-52.2,-65.58z`;
