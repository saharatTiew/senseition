import React, { useState, Fragment } from "react";
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
import Survey from './Survey'
import Review from './Review'

const drawerWidth = 240;
const teacherPath = 'teacher';

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
            <Paper sqaure="true" style={{ borderRadius: 10, marginTop: 10, paddingTop: 30}}>
                <h3 className="pl-4 pt-1 pb-2">{props.faculty.name} {mainPage}</h3>
                <Paper square >
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
                        {mainPage === '1' ?
                            <Fragment>
                            <Col sm={7}>
                                <Biography {...props} teacherPath={teacherPath} />
                            </Col>
                            <Col sm={5}>
                                <Course/>
                            </Col>
                            </Fragment>
                        : mainPage === '2' ? <Review /> : <Survey />}
                    </Row>
                </Container>
            </Paper>
        </main>
    );
}
