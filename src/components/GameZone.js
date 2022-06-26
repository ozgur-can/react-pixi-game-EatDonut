import React from "react";
import { useSelector } from "react-redux";
import Character from "./Character";
import Donut from "./Donut";
import GameStats from "./GameStats";
import GameMenu from "./GameMenu";
import { Text } from "@inlet/react-pixi";
import { gameMenuFontStyle } from "../utils/helpers";

const GameZone = (props) => {
  const game = useSelector((state) => state.game);

  return (
    <React.Fragment>
      {!game.isStart ? (
        <GameMenu app={props.app} />
      ) : (
        <>
            <Text
              text={"Hold & throw away cat within an angle!"}
              x={gameMenuFontStyle.position.x-50}
              y={gameMenuFontStyle.position.y}
              style={gameMenuFontStyle}
            />
          <GameStats />
          <Character app={props.app} />
          <Donut app={props.app} />
        </>
      )}
    </React.Fragment>
  );
};

export default GameZone;
