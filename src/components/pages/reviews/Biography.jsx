import React, { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap'
import {
    Paper, Divider, Grid, Button, InputLabel, Select, TextField,
    FormControl, Box, Typography
} from '@material-ui/core';

import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import fetchOptions, { fetchPostOptions } from '../../fetchOptions';

function TeacherPaper(props) {

    return (
        <div style={{ marginTop: 30, marginBottom: 30, paddingTop: 30, paddingLeft: 30, paddingRight: 30, paddingBottom: 30, backgroundColor: "red"}}>
            {/* <Container> */}
            <Row>
                <Col sm={3}>
                    {/* width: '9vw', height: '9vw'} */}
                        <img
                            // src="https://www.nea.org/sites/default/files/legacy/2020/04/new_teacher.jpeg"
                            src={props.pictureUrl}
                            // className="bg"
                            className="photo"
                            alt="human"
                        />
                </Col>
                <Col sm={9}>
                    {/* <h4>PHANUWAT SIKHARESTRAKUL</h4> */}
                    <Typography variant="h4">{props.fullName}</Typography>
                    <Typography variant="h6" className="mt-1 mb-3">{props.position}</Typography>
                    <div style={{ backgroundColor: "#F4F4F4", borderRadius: 10 }}>
                        <div className="d-flex flex-row" style={{ marginRight: 35 + '%', paddingTop: 8, paddingBottom: 8, marginBottom: 20 }}>
                            <div style={{ marginLeft: "auto" }}>
                                <img
                                    src={props.facultyLogo}
                                    // className="bg"
                                    width="90"
                                    height="90"
                                    alt="human"
                                />
                            </div>
                            <div>
                                <h4 className="mt-3">{props.major}</h4>
                                <h5>{props.faculty}</h5>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    {/* <h3>Biography</h3> */}
                    {/* <Typography variant="h4" component="h2">Biography</Typography> */}
                    <Typography component="div">
                        <Box textAlign="justify" m={1} fontSize={30}>
                            Biography
                         </Box>
                    </Typography>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <Typography component="div">
                        <Box textAlign="justify" m={1}>
                           {props.biography}
                         </Box>
                    </Typography>
                </Col>
            </Row>
            {/* </Container> */}
        </div>
    );
}


function Biography(props) {
    // const [teacher, setTeacher] = useState();

    useEffect(() => {
        if (props.teacherId && !props.teacher) {
            fetch(`${process.env.REACT_APP_API_URL}/${props.teacherPath}/biography?teacherId=${props.teacherId}`, fetchOptions)
                .then(res => {
                    if (!res.ok) { throw res }
                    return res.json();
                })
                .then((result) => {
                    props.setTeacher(result);
                })
                .catch(err => {
                    alert("teacher not found")
                });
        } else {
            console.log('ssssssssssss');
        }
    }, [props.teacherId])

    return (
        // <Box height="1000%">
        // style={{ width: 100 + '%', paddingBottom: 5 + '%', paddingTop: 5 + '%' }}
        <Paper style={{ borderRadius: 15, marginLeft: 20 }}>
            { props.teacher && <TeacherPaper {...(props.teacher) } /> }
        </Paper>
    )
}

export default Biography;

