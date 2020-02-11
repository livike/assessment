import React from "react";
import { render } from "react-dom";
import { Grommet } from "grommet";
import Navigation from "./components/Navigation";
import Users from "./components/Users";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

const App = () => {
  return (
    <div>
      <Grommet>
        <Router>
          <Navigation />
          <div className="app-container">
            <Switch>
              <Route path={"/"}>
                <Users />
              </Route>
            </Switch>
          </div>
        </Router>
      </Grommet>
    </div>
  );
};

console.log(Users);

render(<App />, document.getElementById("root"));
