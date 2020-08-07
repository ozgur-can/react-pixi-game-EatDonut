import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Text, Sprite, useTick } from "@inlet/react-pixi";
import Character from "./Character";
import Target from "./Target";
import { updateChar } from "../reduxlayer/actions";

const GameZone = (props) => {
  const score = useSelector((state) => state.score);
  const iter = useRef(0);
  const { newC } = useSelector((state) => state);
  const dispatch = useDispatch();

  useTick((delta) => {
    const i = (iter.current += 0.05 * delta);
    dispatch(
      updateChar({
        x: Math.sin(i) * 100,
        y: Math.sin(i / 1.5) * 100,
        rotation: Math.sin(i) * Math.PI,
        anchor: Math.sin(i / 2),
      })
    );
  });
  return (
    <React.Fragment>
      <Text text={`Score: ${score}`} x={20} y={20} />
      <Character app={props.app} />
      <Target app={props.app} />
      <Sprite
        image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png"
        {...newC}
      />
    </React.Fragment>
  );
};

export default GameZone;
