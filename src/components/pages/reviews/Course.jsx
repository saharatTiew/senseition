import React, { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap'
import {
    Paper, Divider, Grid, Button, InputLabel, Select, TextField,
    FormControl, Box, Typography
} from '@material-ui/core';
import Table from 'react-bootstrap/Table';
import fetchOptions, { fetchPostOptions } from '../../fetchOptions';

// const data = [
//     {
//         courseId: 1,
//         courseName: "Computer Programming I",
//         rate: "4/5",
//     },
//     {
//         courseId: 2,
//         courseName: "Web Application Development",
//         rate: "5/5",
//     },
//     {
//         courseId: 3,
//         courseName: "Data structure And Algorithm",
//         rate: "5/5",
//     }
// ]


function CourseBody(props) {
    return (
        <tr>
            <td>{props.courseCode}</td>
            <td>{props.courseName}</td>
            <td>{props.rate}/{props.maxRate}</td>
        </tr>
    )
}

function Course(props) {
    // const [course, setCourse] = useState();

    useEffect(() => {
        if (props.teacherId && !props.course) {
            fetch(`${process.env.REACT_APP_API_URL}/${props.teacherPath}/courses?teacherId=${props.teacherId}`, fetchOptions)
                .then(res => {
                    if (!res.ok) { throw res }
                    return res.json();
                })
                .then((result) => {
                    props.setCourse(result);
                })
                .catch(err => {
                    alert("course not found")
                });
        } else {
            console.log('ssssssssssss');
        }
    }, [props.teacherId])

    return (
        // <Box height="1000%">
        <Paper style={{ borderRadius: 10, marginRight: 20 }}>
            <div style={{ marginTop: 30, marginLeft: 40, marginRight: 40, marginBottom: 30, paddingTop: 30, paddingBottom: 30 }}>
                {/* <Container> */}
                <h4>Course list:</h4>
                <Divider className="mt-2 mb-2" />
                <Row>
                    <Table striped borderless hover responsive>
                        <thead>
                            <tr>
                                <th style={{ "width": 30 + '%' }}>Course Code</th>
                                <th style={{ "width": 50 + '%' }}>Course name</th>
                                <th style={{ "width": 20 + '%' }}>Rate</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.course && props.course.map(i => <CourseBody {...i} key={i.courseCode} />)}
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

