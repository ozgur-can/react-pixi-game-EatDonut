import React, { useRef } from "react";
import { Sprite, Text, useTick } from "@inlet/react-pixi";
import { useDispatch, useSelector } from "react-redux";
import { charNameFontStyle } from "../utils/helpers";
import { stopChar, throwChar, moveChar } from "../reduxlayer/actions";

const Character = () => {
  const { character } = useSelector((state) => state);
  const dispatch = useDispatch();
  const iter = useRef(0);

  const mouseUpThrow = (event) => {
    // get mouse up position
    const droppedPosition = {
      x: event.data.global.x,
      y: event.data.global.y,
    };

    dispatch(throwChar(character.position, droppedPosition));
  };

  useTick((delta) => {
    let i = (iter.current += 0.05 * delta);

    // move character dispatch after throw char
    if (character.isMove && i < character.distanceDropped)
      dispatch(moveChar(i));

    // stop character dispatch when loop ends
    if (i >= character.distanceDropped) {
      iter.current = 0;
      dispatch(stopChar());
    }
  });

  return (
    <React.Fragment>
      <Text
        text={character.name}
        anchor={character.anchor}
        x={character.position.x}
        y={character.position.y - 30}
        style={charNameFontStyle}
      />
      <Sprite
        image={character.image}
        scale={[character.scale, character.scale]}
        position={{ x: character.position.x, y: character.position.y }}
        anchor={character.anchor}
        buttonMode={true}
        interactive={true}
        cursor={"grab"}
        mouseupoutside={(event) => mouseUpThrow(event)}
        {...character}
      />
    </React.Fragment>
  );
};

export default Character;
