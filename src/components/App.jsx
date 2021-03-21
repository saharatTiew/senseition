import React, { useState } from "react";
import Login from "./pages/entries/Login";
import Register from "./pages/entries/Register";
import Member from './pages/members/Member';
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
      { !isEntryPage && <SideNav />}
      <Switch>
        <Route path="/registers" component={ Register } />
        <Route path="/member" component={ Member } />
        <Route path="/" component={ Login } />
      </Switch>
    </Router>
  );
}
