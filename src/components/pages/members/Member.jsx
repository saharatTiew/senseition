import React, { useState } from "react";
import Table from "./Table"
import Table2 from "./Table2"
import { Paper, Divider, Grid, Button, InputLabel, Select, TextField, FormControl, Box } from '@material-ui/core';
import SideNavStyles from '../../../materialUIStyles/SideNavStyles'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';

import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const drawerWidth = 240;

const dropdownStyles = makeStyles((theme) => ({
  formControl: {
    marginRight: theme.spacing(5),
    minWidth: 140,
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


export default function Member(props) {
  const classes = SideNavStyles();
  const dropdownClasses = dropdownStyles();

  return (
    <main
      className={clsx(classes.content, {
        [classes.contentShift]: props.open,
      })}
    >
      <div className={classes.drawerHeader} />
      <Paper className="mt-3" style={{ borderRadius : 15}}>
        <Grid container spacing={3}>
          <Grid item xs={8} sm={10}>
          {/* {props.faculty.name} */}
            <h4 className="ml-3 mt-3 mb-3"></h4>
          </Grid>
          <Grid item xs={2} sm={1}>
            <div>
                <FormControl size="small" variant="outlined" className={dropdownClasses.formControl} margin="normal">
                  <InputLabel autoWidth="true" style={{fontSize:13, textAlign:"center"}}>Select Major</InputLabel>
                  <Select style={{height : 37, marginLeft:10, marginRight: 20, }}
                    native
                    // labelWidth="10"
                    // value={state.age}
                    // onChange={handleChange}
                    label="Select Major"
                    inputProps={{
                      name: 'age',
                      id: 'outlined-age-native-simple',
                    }}
                  >
                  </Select>
                </FormControl>
            </div>
          </Grid>
          <Grid item xs={2} sm={1}>
            <Button className="east-bay-button mt-3 mb-3" variant="contained" color="primary">
              Filter
          </Button>
          </Grid>
        </Grid>
        <Divider className="mb-3" />
        <Table2 {...props} />
      </Paper>
    </main>
  );
}
