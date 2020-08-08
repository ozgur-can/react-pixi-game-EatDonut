import {
  character,
  target,
  game,
  distance,
  randomlyXY,
} from "../../utils/helpers";
const initialState = {
  character,
  target,
  game,
  newC: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "THROW_CHARACTER":
      return {
        ...state,
        character: {
          ...character,
          isMove: true,
          distanceDropped: distance(
            action.characterPosition,
            action.droppedPosition
          ),
        },
      };
    case "STOP_CHARACTER":
      return {
        ...state,
        character: { ...character, isMove: false },
      };
    case "MOVE_CHAR":
      return {
        ...state,
        character: {
          ...state.character,
          position: {
            x: character.position.x + Math.sin(action.iteration) * 20,
            y: character.position.y + Math.sin(action.iteration / 1.5) * 20,
          },
          rotation: (Math.sin(action.iteration) * Math.PI) / 3,
        },
      };

    case "UPDATE":
      return {
        ...state,
        newC: action.data,
      };

    case "CHANGE_TARGET":
      return {
        ...state,
        target: {
          ...target,
          position: randomlyXY(),
        },
      };

    default:
      return state;
  }
};
export default reducer;
