import React from "react";
import { Sprite, Text } from "@inlet/react-pixi";
import { useSelector } from "react-redux";
import { charNameFontStyle } from "../utils/helpers";

const Donut = () => {
  const donut = useSelector((state) => state.donut);

  return (
    <React.Fragment>
      <Text
        text={donut.name}
        anchor={0.5}
        x={donut.position.x}
        y={donut.position.y - 30}
        style={charNameFontStyle}
      />
      <Sprite
        image={donut.image}
        scale={[donut.scale, donut.scale]}
        position={{ x: donut.position.x, y: donut.position.y }}
        anchor={[0.5, 0.5]}
        buttonMode={true}
        interactive={true}
        cursor={"crosshair"}
      />
    </React.Fragment>
  );
};

export default Donut;
