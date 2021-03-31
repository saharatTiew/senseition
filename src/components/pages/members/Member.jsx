import React, { useState, useEffect } from "react";
import Table from "./Table"
import Table2 from "./Table2"
import { Paper, Divider, Grid, Button, InputLabel, Select, TextField, FormControl, Box, MenuItem } from '@material-ui/core';
import SideNavStyles from '../../../materialUIStyles/SideNavStyles'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';

import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";

const drawerWidth = 240;

const dropdownStyles = makeStyles((theme) => ({
  formControl: {
    marginRight: theme.spacing(5),
    minWidth: 300,
    maxWidth: 300
    // height: 10
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
  },
}));


// const useStyles = makeStyles((theme) => ({
//   // root: {
//   //   width: "80%",
//   //   flexGrow: 1,
//   //   padding: theme.spacing(3),
//   //   transition: theme.transitions.create('margin', {
//   //     easing: theme.transitions.easing.sharp,
//   //     duration: theme.transitions.duration.leavingScreen,
//   //   }),
//   //   marginLeft: -drawerWidth,
//   //   flexGrow: 1,
//   //   padding: theme.spacing(3)
//   //   // padding: "auto 100px auto auto"
//   // },
//   toolbar: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     padding: theme.spacing(0, 1),
//     // necessary for content to be below app bar
//     ...theme.mixins.toolbar,
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//   },
// }));

// function getQueryVariable(variable) {
//   var query = window.location.search.substring(1);
//   var vars = query.split('&');
//   for (var i = 0; i < vars.length; i++) {
//     var pair = vars[i].split('=');
//     if (decodeURIComponent(pair[0]) == variable) {
//       return decodeURIComponent(pair[1]);
//     }
//   }
// }


export default function Member(props) {
  const classes = SideNavStyles();
  const dropdownClasses = dropdownStyles();
  const [major, setMajor] = useState();
  const [statefilterMajor, setFilterMajor] = useState();
  console.log('major', major);
  // const [tempFacultyFilter, setTempFacultyFilter] = useState();
  // const location = useLocation()
  // console.log('member fddddddddddddddddddddd', location);
  // ?facultyId=

  // useEffect(() => {
  //   if (location.search) {
  //     let parsedQuery = getQueryVariable('facultyId');
  //     console.log(parsedQuery);
  //     console.log(parseInt(parsedQuery));
  //     let tempFaculty = props.facultyLists.filter(x => x.id === parseInt(parsedQuery));
  //     if (tempFaculty[0]) {
  //       alert(JSON.stringify(tempFaculty));
  //       props.setFaculty(tempFaculty[0])
  //     }
  //   }
  // }, [])

  const filterMajor = (event) => {
      console.log(event.target.value);
      setFilterMajor(event.target.value);
  }


  return (
    <main
      className={clsx(classes.content, {
        [classes.contentShift]: props.open,
      })}
    >
      <div className={classes.drawerHeader} />
      <Paper className="mt-3" style={{ borderRadius: 15 }}>
        <Grid container spacing={3}>
          <Grid item xs={8} sm={10}>
            <h4 className="ml-3 mt-3 mb-3">{props.faculty && props.faculty.name}</h4>
          </Grid>
          <Grid item xs={2} sm={1}>
            <div>
              <FormControl size="small" variant="outlined" className={dropdownClasses.formControl} margin="normal">
                <InputLabel autoWidth="false" style={{ fontSize: 13, textAlign: "center" }}>Select Major</InputLabel>
                <Select style={{ height: 37, marginBottom: 15, marginLeft: 5, width: 60+ "%" }}
                  // native
                  // labelWidth="10"
                  // value={state.age}
                  onChange={filterMajor}
                  label="Select Major"
                >
                  {major && major.map((x) => (
                    <MenuItem key={x.majorId} value={x.majorId}>
                      {x.majorName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </Grid>
        </Grid>
        <Divider className="mb-3" />
        <Table2 {...props} major={major} setMajor={setMajor} filterMajor={statefilterMajor} setFilterMajor={setFilterMajor}/>
      </Paper>
    </main>
  );
}
