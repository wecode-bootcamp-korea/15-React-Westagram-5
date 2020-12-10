import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginHa from "./Pages/hth/LoginHTH/LoginHTH"; // 태현
import MainHa from "./Pages/hth/MainHTH/MainHTH"; // 태현
import LoginKim from "./Pages/hth/LoginHTH/LoginHTH"; // 찬영
import MainKim from "./Pages/hth/MainHTH/MainHTH"; // 찬영
import LoginMoon from "./Pages/hth/LoginHTH/LoginHTH"; // 병곤
import MainMoon from "./Pages/hth/MainHTH/MainHTH"; // 병곤
import LoginAra from "./Pages/hth/LoginHTH/LoginHTH"; // 아람
import MainAra from "./Pages/hth/MainHTH/MainHTH"; // 아람

class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
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
      </BrowserRouter>
    );
  }
}
export default Routes;
