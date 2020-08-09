import * as helpers from "../../utils/export";
import * as images from "../../images/export";

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
            action.droppedPosition,
            4
          ),
          dirX:
            action.characterPosition.x - action.droppedPosition.x > 0 ? 1 : -1,
          dirY:
            action.characterPosition.y - action.droppedPosition.y > 0 ? 1 : -1,
          image: images.cat1,
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
      if (action.iteration < state.character.distanceDropped) {
        return {
          ...state,
          character: {
            ...state.character,
            position: {
              x:
                state.character.position.x +
                Math.sin(action.iteration / 3) * state.character.dirX,
              y:
                state.character.position.y +
                Math.sin(action.iteration / 3) * state.character.dirY,
            },
            rotation: (Math.sin(action.iteration) * Math.PI) / 30,
          },
        };
      } else
        return {
          ...state,
        };

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
          image: images.cat2,
          level:
            state.game.score > 0 && (state.game.score + 10) % 50 === 0
              ? state.character.level + 1
              : state.character.level,
        },
      };

    default:
      return state;
  }
};
export default reducer;
