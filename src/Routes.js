import React from "react";
import Login from "./Pages/ara/Login/Login";
import Main from "./Pages/ara/Main/Main";
import { BrowserRouter, Switch, Route, Router } from "react-router-dom";

class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/main" component={Main} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default Routes;
