import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Stage, AppConsumer } from "@inlet/react-pixi";
import { Provider } from "react-redux";
import GameZone from "./components/GameZone";
import store from "./reduxlayer/store";
import { stageOptions, vh, vw } from "./utils/helpers";
import { useMediaQuery } from "react-responsive";

const App = () => {
  const isMobile = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });

  useEffect(() => {
    if (isMobile) {
      document.getElementById("stageId").style.height = vh(100);
      document.getElementById("stageId").style.width = vw(100);
    }
  }, [isMobile]);

  return (
    <Stage
      id={stageOptions.elementId}
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
