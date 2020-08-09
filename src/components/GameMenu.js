import React, { useEffect, useState } from "react";
import { Text, Sprite } from "@inlet/react-pixi";
import { useSelector, useDispatch } from "react-redux";
import { gameMenuFontStyle } from "../utils/helpers";
import { startGame } from "../reduxlayer/actions";

const GameMenu = (props) => {
  const character = useSelector((state) => state.character);
  const [posX, setPosX] = useState(character.position.x);
  const dispatch = useDispatch();

  const moveToStart = () => setPosX((posX) => posX + 0.5);

  useEffect(() => {
    props.app.ticker.add(moveToStart);
    return () => props.app.ticker.remove(moveToStart);
  }, [props.app.ticker]);

  return (
    <React.Fragment>
      <Text
        text={"Hold on cat to start!"}
        x={gameMenuFontStyle.position.x}
        y={gameMenuFontStyle.position.y}
        style={gameMenuFontStyle}
      />

      <Sprite
        image={character.image}
        scale={[character.scale, character.scale]}
        position={{ x: posX, y: character.position.y }}
        anchor={character.anchor}
        interactive={true}
        mouseover={() => dispatch(startGame())}
      />
    </React.Fragment>
  );
};

export default GameMenu;
