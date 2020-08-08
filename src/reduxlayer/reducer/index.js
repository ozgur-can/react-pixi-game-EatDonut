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
        character: {
          ...character,
          isMove: false,
          distanceDropped: undefined,
        },
      };

    case "MOVE_CHAR":
      if (action.iteration < state.character.distanceDropped)
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

      break;
    case "UPDATE":
      return {
        ...state,
        newC: action.data,
      };

    case "HIT_SUCCESS":
      return {
        ...state,
        target: {
          ...state.target,
          position: randomlyXY(),
        },
        game: { ...state.game, score: state.game.score + 10 },
      };

    default:
      return state;
  }
};
export default reducer;
