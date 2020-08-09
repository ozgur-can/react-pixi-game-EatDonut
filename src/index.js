import React from "react";
import ReactDOM from "react-dom";
import { Stage, AppConsumer } from "@inlet/react-pixi";
import { Provider } from "react-redux";
import GameZone from "./components/GameZone";
import store from "./reduxlayer/store";
import { stageOptions } from "./utils/helpers";

const App = () => {
  return (
    <Stage
      width={stageOptions.width}
      height={stageOptions.height}
      options={{ backgroundColor: stageOptions.backgroundColor }}
    >
      <Provider store={store}>
        <AppConsumer>{(app) => <GameZone app={app} />}</AppConsumer>
      </Provider>
    </Stage>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
