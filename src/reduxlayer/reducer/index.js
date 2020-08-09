import * as helpers from "../../utils/export";

const initialState = {
  character: helpers.character,
  donut: helpers.donut,
  game: helpers.game,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "THROW_CHARACTER":
      return {
        ...state,
        character: {
          ...state.character,
          isMove: true,
          distanceDropped: helpers.distance(
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
            position: {
              x: state.character.position.x + Math.sin(action.iteration),
              y: state.character.position.y + Math.sin(action.iteration),
            },
            rotation: (Math.sin(action.iteration) * Math.PI) / 30,
          },
        };

      break;
    case "EAT_SUCCESS":
      return {
        ...state,
        donut: {
          ...state.donut,
          position: helpers.randomlyXY(),
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
