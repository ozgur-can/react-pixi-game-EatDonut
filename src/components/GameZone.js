import React from "react";
import Character from "./Character";
import Target from "./Target";
import DummyEnemy from "./DummyEnemy";
import GameStats from "./GameStats";

const GameZone = (props) => {
  return (
    <React.Fragment>
      <GameStats />
      <Character app={props.app} />
      <Target app={props.app} />
      <DummyEnemy />
    </React.Fragment>
  );
};

export default GameZone;
