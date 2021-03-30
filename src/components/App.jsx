import React, { useState, useEffect } from "react";
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
  Link,
  useLocation
} from "react-router-dom";

import Biography from './pages/reviews/Biography'
import MainReview from './pages/reviews/MainReview'
import SideNavStyles from '../materialUIStyles/SideNavStyles';

const entryPath = "user";
const facultyPath = "faculty";

export default function App() {
  const [isEntryPage, setIsEntryPage] = useState(true)
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState();
  const [defaultFaculty, setDefaultFaculty] = useState();
  const [faculty, setFaculty] = useState();
  const [facultyLists, setFacultyLists] = useState();
  const [facultyFilter, setFacultyFilter] = useState(0);
  const classes = SideNavStyles();
  const theme = useTheme();
  console.log(JSON.stringify(faculty));

  // useEffect( () => {
  //   if (facultyFilter !== 0) {
  //     let tempFaculty = facultyLists.filter(x => x.id == facultyFilter);
  //     if (tempFaculty) {
  //       setFaculty(tempFaculty[0])
  //     }
  //   }
  // }, [facultyFilter])

  return (
    <Router basename="senseition">
      <div className={classes.root}>
        {!isEntryPage && <SideNav open={open} setOpen={setOpen} defaultFaculty={faculty} setDefaultFaculty={setDefaultFaculty} 
                          facultyPath={facultyPath} faculty={faculty} setFaculty={setFaculty} 
                          facultyLists={facultyLists}
                          setFacultyLists={setFacultyLists}
        />}
        
        <Switch>
          <Route path="/registers" component={Register} />
          <Route path="/member">
            <Member open={open} faculty={faculty} setFaculty={setFaculty} facultyPath={facultyPath} defaultFaculty={defaultFaculty} 
                                facultyLists={facultyLists} setFacultyLists={setFacultyLists}
            />
          </Route>
          <Route path="/mainreview">
            <MainReview open={open} faculty={faculty} setFaculty={setFaculty} />
          </Route>
          <Route path="/">
            <Login entryPath={entryPath} user={user} setUser={setUser} setIsEntryPage={setIsEntryPage} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}