import React from "react";
import { Sprite, Text } from "@inlet/react-pixi";
import { useSelector, useDispatch } from "react-redux";
import { charNameFontStyle } from "../utils/helpers";
import { changeTargetPos } from "../reduxlayer/actions";

const Target = () => {
  const target = useSelector((state) => state.target);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <Text
        text={target.name}
        anchor={0.5}
        x={target.position.x}
        y={target.position.y - 30}
        style={charNameFontStyle}
      />
      <Sprite
        image={target.image}
        scale={[target.scale, target.scale]}
        position={{ x: target.position.x, y: target.position.y }}
        anchor={[0.5, 0.5]}
        buttonMode={true}
        interactive={true}
        cursor={"crosshair"}
        click={() => dispatch(changeTargetPos())}
      />
    </React.Fragment>
  );
};

export default Target;
