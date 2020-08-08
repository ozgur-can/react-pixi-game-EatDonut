import React from "react";
import Character from "./Character";
import Target from "./Target";
import GameStats from "./GameStats";
// import DummyEnemy from "./DummyEnemy";

const GameZone = (props) => {
  return (
    <React.Fragment>
      <GameStats />
      <Character app={props.app} />
      <Target app={props.app} />
    </React.Fragment>
  );
};

export default GameZone;
