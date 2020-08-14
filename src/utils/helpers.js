import * as images from "../images/export";

// initial in-game values
export const game = {
  score: 0,
  isStart: false,
  moveToStart: false,
};

export const stageOptions = {
  elementId: "stageId",
  width: 500,
  height: 500,
  backgroundColor: 0xe16d51,
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

// font styles
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

export const gameMenuFontStyle = {
  align: "center",
  fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
  fontSize: 27,
  letterSpacing: 1.67,
  fill: ["#f3e1e1", "#f7f7f7", "#f9c49a"],
  position: { x: stageOptions.width / 4, y: stageOptions.height / 2.5 },
};

// functions
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

export const vh = (v) => {
  var h = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight || 0
  );
  return (v * h) / 100;
};

export const vw = (v) => {
  var w = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );
  return (v * w) / 100;
};
