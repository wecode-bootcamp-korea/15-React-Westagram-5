import React from "react";
import LoginHTH from "./Pages/hth/LoginHTH/LoginHTH";
import MainHTH from "./Pages/hth/MainHTH/MainHTH";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/hthlogin" component={LoginHTH} />
          <Route exact path="/hthmain" component={MainHTH}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
export default Routes;
