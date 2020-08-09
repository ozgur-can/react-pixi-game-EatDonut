import * as images from "../images/export";

export const charNameFontStyle = {
  align: "center",
  fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
  fontSize: 16,
  letterSpacing: 0.75,
  fill: ["#f4f6ff"],
};

export const gameStatFontStyle = {
  align: "center",
  fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
  fontSize: 23,
  letterSpacing: 1.25,
  fill: ["#eeeeee", "#f3c623", "#b4f2e1"],
};

export const game = {
  score: 0,
};

export const character = {
  position: {
    x: Math.floor(Math.random() * 350 + 100),
    y: Math.floor(Math.random() * 350 + 100),
  },
  anchor: 0.5,
  name: "Cat",
  nameMarginTop: 38,
  image: images.catMove,
  level: 1,
  scale: 1,
  isMove: false,
  distanceDropped: undefined,
  dirX: null,
  dirY: null,
};

export const donut = {
  position: {
    x: Math.floor(Math.random() * 350 + 100),
    y: Math.floor(Math.random() * 350 + 100),
  },
  anchor: 0.5,
  name: "Donut",
  image: images.donut,
  scale: 0.041,
  rotation: -1,
  health: 100,
};

export const randomlyXY = () => {
  const position = {
    x: Math.floor(Math.random() * 350 + 100),
    y: Math.floor(Math.random() * 350 + 100),
  };
  return position;
};

export const distance = (charPosition, droppedPosition, pow) => {
  return parseFloat(
    Math.pow(
      Math.pow(charPosition.x - droppedPosition.x, 2) +
        Math.pow(charPosition.y - droppedPosition.y, 2),
      pow
    ).toFixed(0)
  );
};
