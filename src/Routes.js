import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginHa from "./Pages/hth/LoginHTH/LoginHTH";
import MainHa from "./Pages/hth/MainHTH/MainHTH";
import LoginKim from "./Pages/kcy/Login/LoginKim";
import MainKim from "./Pages/kcy/Main/MainKim";
import LoginMoon from "./Pages/mbg/Login-bg/Login";
import MainMoon from "./Pages/mbg/Main-bg/Main";
import LoginAra from "./Pages/ara/Login/Login";
import MainAra from "./Pages/ara/Main/Main";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/LoginHa" component={LoginHa} />
          <Route exact path="/LoginKim" component={LoginKim} />
          <Route exact path="/LoginMoon" component={LoginMoon} />
          <Route exact path="/LoginAra" component={LoginAra} />

          <Route exact path="/MainHa" component={MainHa} />
          <Route exact path="/MainKim" component={MainKim} />
          <Route exact path="/MainMoon" component={MainMoon} />
          <Route exact path="/MainAra" component={MainAra} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
