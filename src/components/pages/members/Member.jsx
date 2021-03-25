import React, { useState } from "react";
import Table from "./Table"
import Table2 from "./Table2"
import Paper from '@material-ui/core/Paper';
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
  const theme = useTheme();
  // const [open, setOpen] = React.useState(false);

  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };

  return (
    <main
      className={clsx(classes.content, {
        [classes.contentShift]: props.open,
      })}
    >
      <div className={classes.drawerHeader} />
      <Table2 />
    </main>
  );
}
