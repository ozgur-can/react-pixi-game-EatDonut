import React, { useEffect } from "react";
import { Sprite, Text } from "@inlet/react-pixi";
import { useDispatch, useSelector } from "react-redux";
import { charNameFontStyle } from "../utils/helpers";
import { stopChar, moveChar, throwChar } from "../reduxlayer/actions";

const Character = (props) => {
  const { character, dirX, dirY } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    props.app.ticker.add(tick);
    return () => props.app.ticker.remove(tick);
  }, [props.app.ticker, dirX, dirY]);

  const tick = () => {};

  return (
    <React.Fragment>
      <Text
        text={character.name}
        anchor={0.5}
        x={character.position.x}
        y={character.position.y - 30}
        style={charNameFontStyle}
      />
      <Sprite
        image={character.image}
        scale={[character.scale, character.scale]}
        position={{ x: character.position.x, y: character.position.y }}
        anchor={[0.5, 0.5]}
        buttonMode={true}
        interactive={true}
        cursor={"grab"}
        click={() => dispatch(stopChar())}
        mouseupoutside={(event) => {
          // send new positions of the character
          const droppedPosition = {
            x: event.data.global.x,
            y: event.data.global.y,
          };
          dispatch(moveChar(droppedPosition));
        }}
      />
    </React.Fragment>
  );
};

export default Character;
