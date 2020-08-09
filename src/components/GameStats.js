import React from "react";
import { useSelector } from "react-redux";
import { Text } from "@inlet/react-pixi";
import { gameStatFontStyle } from "../utils/helpers";

const GameStats = () => {
  const game = useSelector((state) => state.game);
  const character = useSelector((state) => state.character);

  return (
    <React.Fragment>
      <Text
        text={`score: ${game.score}`}
        style={gameStatFontStyle}
        x={20}
        y={20}
      />
      <Text
        text={`cat level: ${character.level}`}
        style={gameStatFontStyle}
        x={20}
        y={50}
      />
    </React.Fragment>
  );
};

export default GameStats;
