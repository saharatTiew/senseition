import React, { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap'
import {
    Paper, Divider, Grid, Button, InputLabel, Select, TextField,
    FormControl, Box, Typography
} from '@material-ui/core';
import Table from 'react-bootstrap/Table';

const data = [
    {
        courseId: 1,
        courseName: "Computer Programming I",
        rate: "4/5",
    },
    {
        courseId: 2,
        courseName: "Web Application Development",
        rate: "5/5",
    },
    {
        courseId: 3,
        courseName: "Data structure And Algorithm",
        rate: "5/5",
    }
]


function CourseBody(props) {
    return (
        <tr>
            <td>{props.courseId}</td>
            <td>{props.courseName}</td>
            <td>{props.rate}</td>
        </tr>
    )
}

function Course() {
    return (
        // <Box height="1000%">
        <Paper>
            <div style={{ marginLeft: 40, marginRight: 40 }}>
                {/* <Container> */}
                    <Row>
                        <Table striped borderless hover responsive>
                            <thead>
                                <tr>
                                    <th style={{ "width": 30 + '%' }}>Course ID</th>
                                    <th style={{ "width": 50 + '%' }}>Course name</th>
                                    <th style={{ "width": 20 + '%' }}>Rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(i => <CourseBody {...i} key={i.courseId} />)}
                            </tbody>
                        </Table>
                    </Row>
                {/* </Container> */}
            </div>
        </Paper>
        // </Box>
    )
}

export default Course;

