import React from "react";
import Login from "./Pages/kcy/Login/Login";
import Main from "./Pages/kcy/Main/Main";
import { BrowserRouter, Switch, Route, Router } from "react-router-dom";

class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />

          <Route exact path="/main" component={Main}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
export default Routes;
