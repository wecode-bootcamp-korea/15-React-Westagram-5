import React from "react";
import LoginKim from "./Pages/kcy/Login/LoginKim";
import MainKim from "./Pages/kcy/Main/MainKim";
import { BrowserRouter, Switch, Route, Router } from "react-router-dom";

class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/LoginKim" component={LoginKim} />
          <Route exact path="/MainKim" component={MainKim} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default Routes;
