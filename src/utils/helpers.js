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
  gameOver: false,
};

export const character = {
  position: { x: 250, y: 250 },
  anchor: 0.5,
  name: "Me",
  image:
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/5410e450-ab51-4563-9fd1-3224dcc9eccc/dcrw7rt-1c6c342e-f841-4131-afd3-238deb18e2d1.gif",
  scale: 1.375,
  rotation: 1,
  health: 100,
  isMove: false,
  distanceDropped: undefined,
};

export const donut = {
  position: {
    x: Math.floor(Math.random() * 350 + 100),
    y: Math.floor(Math.random() * 350 + 100),
  },
  name: "Donut",
  image: "https://art.pixilart.com/7f775abcc538d7d.png",
  scale: 0.05,
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

export const distance = (charPosition, droppedPosition) => {
  return parseFloat(
    Math.pow(
      Math.pow(charPosition.x - droppedPosition.x, 2) +
        Math.pow(charPosition.y - droppedPosition.y, 2),
      1 / 4
    ).toFixed(0)
  );
};
