import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Sprite, useTick } from "@inlet/react-pixi";
import { updateChar } from "../reduxlayer/actions";

const DummyEnemy = () => {
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
      <Sprite
        image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png"
        {...newC}
      />
    </React.Fragment>
  );
};

export default DummyEnemy;
