export const throwChar = (position) => ({
  type: "THROW_CHARACTER",
  droppedPosition: {
    x: position.x,
    y: position.y,
  },
});

export const stopChar = () => ({
  type: "STOP_CHARACTER",
});

export const moveChar = (position) => ({
  type: "MOVE_CHAR",
  position: position,
});

export const updateChar = (data) => ({
  type: "UPDATE",
  data: data,
});
