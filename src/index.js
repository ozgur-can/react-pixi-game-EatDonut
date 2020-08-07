import React from "react";
import ReactDOM from "react-dom";
import { Stage, AppConsumer } from "@inlet/react-pixi";
import { Provider } from "react-redux";
import GameZone from "./components/GameZone";
import store from "./reduxlayer/store";

const App = () => {
  return (
    <Stage width={500} height={500} options={{ backgroundColor: 0xe26c52 }}>
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
