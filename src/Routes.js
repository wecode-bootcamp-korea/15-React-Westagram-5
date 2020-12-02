import React from 'react';
import Login from './Login/Login';
import Main from './Main/Main';
import {BrowserRouter, Switch, Route, Router} from 'react-router-dom';



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
