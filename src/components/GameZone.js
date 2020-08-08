import React from "react";
import { useSelector } from "react-redux";
import { Text } from "@inlet/react-pixi";
import Character from "./Character";
import Target from "./Target";
import DummyEnemy from "./DummyEnemy";

const GameZone = (props) => {
  const score = useSelector((state) => state.score);

  return (
    <React.Fragment>
      <Text text={`Score: ${score}`} x={20} y={20} />
      <Character app={props.app} />
      <Target app={props.app} />
      <DummyEnemy />
    </React.Fragment>
  );
};

export default GameZone;
