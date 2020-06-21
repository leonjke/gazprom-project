import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Main from "../../pages/Main";
import Idea from "../../pages/Idea";
import User from "../../pages/User";
import Puzzle from "../../pages/Puzzle";
import Canban from "../../pages/Canban";

const App = () => {
  return (
    <Router forceRefresh={true}>
      <Switch>
        <Route exact path="/" render={() => <Main />} />
        <PrivateRoute exact path="/idea" component={Idea} />
        <PrivateRoute exact path="/idea/profile" component={User} />
        <PrivateRoute exact path="/idea/puzzle" component={Puzzle} />
        <PrivateRoute exact path="/idea/canban" component={Canban} />
      </Switch>
    </Router>
  );
};

export default App;
