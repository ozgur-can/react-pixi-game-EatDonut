import React from "react";
import { useSelector } from "react-redux";
import Character from "./Character";
import Donut from "./Donut";
import GameStats from "./GameStats";
import GameMenu from "./GameMenu";

const GameZone = (props) => {
  const game = useSelector((state) => state.game);

  return (
    <React.Fragment>
      {!game.isStart ? (
        <GameMenu app={props.app} />
      ) : (
        <>
          <GameStats />
          <Character app={props.app} />
          <Donut app={props.app} />
        </>
      )}
    </React.Fragment>
  );
};

export default GameZone;
