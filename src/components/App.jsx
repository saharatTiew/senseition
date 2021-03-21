import React, { useState } from "react";
import Login from "./Entries/Login";
import Register from "./Entries/Register";
import SideNav from "./SideNav";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function App() {
  const [isEntryPage, SetIsLogin] = useState(false)

  return (
    <Router basename="senseition">
      { !isEntryPage && <SideNav /> }
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
