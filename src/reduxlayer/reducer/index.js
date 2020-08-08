import {
  character,
  donut,
  game,
  distance,
  randomlyXY,
} from "../../utils/helpers";
const initialState = {
  character,
  donut,
  game,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "THROW_CHARACTER":
      return {
        ...state,
        character: {
          ...state.character,
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
          ...state.character,
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
            // TODO: use distanceDropped instead constant values
            position: {
              x: character.position.x + Math.sin(action.iteration) * 150,
              y: character.position.y + Math.sin(action.iteration / 1.5) * 150,
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
        donut: {
          ...state.donut,
          position: randomlyXY(),
        },
        game: { ...state.game, score: state.game.score + 10 },
        character: {
          ...state.character,
          isMove: false,
          distanceDropped: undefined,
        },
      };

    default:
      return state;
  }
};
export default reducer;
