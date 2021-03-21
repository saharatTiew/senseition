import React, { useState } from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from "./Table"
import Table2 from "./Table2"
import Paper from '@material-ui/core/Paper';

import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
    flexGrow: 1,
    padding: theme.spacing(3)
    // padding: "auto 100px auto auto"
  },
}));


export default function Member() {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Paper className={classes.root}>
      <Table2/>
    </Paper>
  );
}
