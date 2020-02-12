import React from "react";
import { render } from "react-dom";
import { Grommet } from "grommet";
import { grommet } from "grommet/themes";
import Navigation from "./components/Navigation";
import Users from "./components/Users";
import AddUser from "./components/AddUser";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { css } from "styled-components";

const customTheme = {
  text: {
    extend: css`
      ${props =>
        props.status === "locked"
          ? "text-decoration: line-through; opacity: 0.5;"
          : ""}
    `
  }
};
const App = () => {
  return (
    <Grommet theme={customTheme}>
      <Router>
        <Navigation />
        <div className="app-container">
          <Switch>
            <Route path="/new">
              <AddUser />
            </Route>
            <Route path={"/"}>
              <Users />
            </Route>
          </Switch>
        </div>
      </Router>
    </Grommet>
  );
};

render(<App />, document.getElementById("root"));
