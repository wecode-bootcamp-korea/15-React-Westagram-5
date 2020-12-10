import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginAram from "./Pages/ara/Login.js/Login";
import MainAram from "./Pages/ara/Main.js/Main";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login-aram" component={LoginAram} />
          <Route exact path="/main-aram" component={MainAram} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
