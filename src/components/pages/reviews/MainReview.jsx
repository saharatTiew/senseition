import React, { useState } from "react";
import { Paper, Divider, Grid, Button, InputLabel, Select, TextField, FormControl, Box, Tabs, Tab } from '@material-ui/core';
import SideNavStyles from '../../../materialUIStyles/SideNavStyles'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import Biography from "./Biography"
import Course from './Course';

import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

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
    const [mainPage, setMainPage] = React.useState("1");

    const handleChange = (event, value) => {
        setMainPage(value);
    }

    return (
        <main
            className={clsx(classes.content, {
                [classes.contentShift]: props.open,
            })}
        >
            <div className={classes.drawerHeader} />
            <Paper sqaure="true" style={{ borderRadius: 50 }}>
                <h3>{props.faculty.name} {mainPage}</h3>
                <Divider />
                <Paper square>
                    <Tabs
                        value={mainPage}
                        indicatorColor="primary"
                        textColor="primary"
                        onChange={handleChange}
                        aria-label="main page"
                    >
                        <Tab label="Biography" value="1" />
                        <Tab label="Review" value="2" />
                        <Tab label="Survey" value="3" />
                    </Tabs>
                </Paper>
                <Divider />
                <Container fluid>
                    <Row>
                        <Col sm={6}>
                            <Biography />
                        </Col>
                        <Col sm={6}>
                            <Course />
                        </Col>
                    </Row>
                </Container>
            </Paper>
        </main>
    );
}
