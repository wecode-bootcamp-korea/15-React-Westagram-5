import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./Pages/ara/Login.js/Login";
// import Signup from './pages/Signup/Signup';
import Main from "./Pages/ara/Main.js/Main";
//사용되는 순서대로 작성함
// './' 현경로 '../' 상위경로 '/' 절대경로

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          {/* <Route exact path="/signup" component={Signup} /> */}
          <Route exact path="/main" component={Main} />
        </Switch>
      </Router>
    );
  }
}
//"exact path는 정확한 경로일때만 들어감"

export default Routes;
