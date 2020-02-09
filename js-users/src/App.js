import React from "react";
import { render } from "react-dom";
import { Grommet } from "grommet";
import Navigation from "./Navigation";
import Users from "./Users";

const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "14px",
      height: "20px"
    }
  }
};

const App = () => {
  return (
    <div>
      <Grommet theme={theme}>
        <Navigation />
        <Users />
      </Grommet>
    </div>
  );
};

console.log(Users);

render(<App />, document.getElementById("root"));
