import React, { useEffect } from "react";
import { Sprite, Text } from "@inlet/react-pixi";
import { useSelector } from "react-redux";
import { charNameFontStyle } from "../utils/helpers";

const Target = (props) => {
  const target = useSelector((state) => state.target);
  // const [pos, setPos] = useState(target.position.x);

  useEffect(() => {
    props.app.ticker.add(tick);

    return () => {
      props.app.ticker.remove(tick);
    };
  }, [props.app.ticker]);

  const tick = (delta) => {
    // setPos((pos) => pos - 0.1);
  };

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
      />
    </React.Fragment>
  );
};

export default Target;
