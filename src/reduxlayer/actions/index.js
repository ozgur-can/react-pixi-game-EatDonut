export const startGame = () => ({
  type: "START_GAME",
});

export const throwChar = (characterPosition, droppedPosition) => ({
  type: "THROW_CHARACTER",
  characterPosition: characterPosition,
  droppedPosition: droppedPosition,
});

export const stopChar = () => ({
  type: "STOP_CHARACTER",
});

export const moveChar = (iteration) => ({
  type: "MOVE_CHAR",
  iteration: iteration,
});
