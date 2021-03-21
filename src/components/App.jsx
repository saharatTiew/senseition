import React from "react";
import Login from "./Login";
import Register from "./Register";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router basename="senseition">
      <Switch>
        <Route path="/register" component={Register}>
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}
