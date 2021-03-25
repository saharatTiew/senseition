import React, { useState } from "react";
import { Paper, Divider, Grid, Button, InputLabel, Select, TextField, FormControl, Box } from '@material-ui/core';
import SideNavStyles from '../../../materialUIStyles/SideNavStyles'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import Biography from "./Biography"

import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const drawerWidth = 240;

const dropdownStyles = makeStyles((theme) => ({
    formControl: {
        // margin: theme.spacing(1),
        minWidth: 140,
        // height: 10
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


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
            <Paper sqaure="true" style={{ borderRadius : 50}}>
                {/* <Grid container spacing={3}>
          <Grid item xs={8} sm={10}>
            <h3>{props.faculty.name}</h3>
          </Grid>
        </Grid> */}
                <h3>{props.faculty.name}</h3>
                <Divider />
                <Biography />
            </Paper>
        </main>
    );
}
