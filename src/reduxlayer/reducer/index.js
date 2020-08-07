import { character, target } from "../../utils/helpers";
const initialState = { character, target, score: 0, newC: null };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "THROW_CHARACTER":
      return {
        ...state,
        dirX:
          state.character.position.x - action.droppedPosition.x > 0 ? 1 : -1,
        dirY:
          state.character.position.y - action.droppedPosition.y > 0 ? 1 : -1,
      };
    case "STOP_CHARACTER":
      return {
        ...state,
        dirX: undefined,
        dirY: undefined,
        character: { ...character, position: { x: 50, y: 50 } },
      };
    case "MOVE_CHAR":
      return {
        ...state,
        character: {
          ...character,
          position: action.position,
        },
      };

    case "UPDATE":
      return {
        ...state,
        newC: action.data,
      };

    default:
      return state;
  }
};
export default reducer;
