import React from "react";
import Character from "./Character";
import Donut from "./Donut";
import GameStats from "./GameStats";

const GameZone = (props) => {
  return (
    <React.Fragment>
      <GameStats />
      <Character app={props.app} />
      <Donut app={props.app} />
    </React.Fragment>
  );
};

export default GameZone;
