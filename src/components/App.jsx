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

import Biography from './pages/reviews/Biography'
import MainReview from './pages/reviews/MainReview'
import SideNavStyles from '../materialUIStyles/SideNavStyles';


export default function App() {
  const [isEntryPage, SetIsLogin] = useState(false)
  const [open, setOpen] = React.useState(false);
  const [faculty, setFaculty] = useState({ id: 1, name: "MSME" });
  const classes = SideNavStyles();
  const theme = useTheme();

  return (

    <Router basename="senseition">
    <div className={classes.root}>
      { !isEntryPage && <SideNav open={open} setOpen={setOpen}/>}
      <Switch>
        <Route path="/registers" component={ Register } />
        <Route path="/member">
          <Member open={open} faculty={faculty} setFaculty={setFaculty}/>
        </Route>
        <Route path="/mainreview">
          <MainReview open={open} faculty={faculty} setFaculty={setFaculty}/>
        </Route>
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