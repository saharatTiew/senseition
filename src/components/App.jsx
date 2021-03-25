import React, { useState } from "react";
import Login from "./pages/entries/Login";
import Register from "./pages/entries/Register";
import Member from './pages/members/Member';
import SideNav from "./SideNav";
import 'bootstrap/dist/css/bootstrap.min.css';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import SideNavStyles from '../materialUIStyles/SideNavStyles';


export default function App() {
  const [isEntryPage, SetIsLogin] = useState(false)
  const classes = SideNavStyles();
  const theme = useTheme();

  return (

    <Router basename="senseition">
    <div className={classes.root}>
      { !isEntryPage && <SideNav />}
      <Switch>
        <Route path="/registers" component={ Register } />
        <Route path="/member" component={ Member } />
        <Route path="/" component={ Login } />
      </Switch>
    </div>
    </Router>

    // <Router basename="senseition">
    //   <div className={classes.root}>
    //     <SideNav />
    //   </div>
    // </Router>
  );
}