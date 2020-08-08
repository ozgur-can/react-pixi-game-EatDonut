export const charNameStyle = {
  align: "center",
  fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
  fontSize: 15,
  fontWeight: 100,
  letterSpacing: 1.5,
  wordWrap: true,
  wordWrapWidth: 150,
};

export const character = {
  position: { x: 250, y: 250 },
  name: "Character",
  image:
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/5410e450-ab51-4563-9fd1-3224dcc9eccc/dcrw7rt-1c6c342e-f841-4131-afd3-238deb18e2d1.gif",
  scale: 1.375,
  rotation: 1,
};

export const target = {
  position: {
    x: Math.floor(Math.random() * 350 + 100),
    y: Math.floor(Math.random() * 350 + 100),
  },
  name: "Target",
  image: "https://art.pixilart.com/7f775abcc538d7d.png",
  scale: 0.05,
  rotation: -1,
};

export const distance = (char, target) => {
  return parseFloat(
    Math.sqrt(
      Math.pow(char.position.x - target.position.x, 2) +
        Math.pow(char.position.y - target.position.y, 2)
    ).toFixed(2)
  );
};
