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

export const updateChar = (data) => ({
  type: "UPDATE",
  data: data,
});

export const changeTargetPos = () => ({
  type: "CHANGE_TARGET",
});
