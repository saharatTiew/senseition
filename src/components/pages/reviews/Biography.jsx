import React, { useState } from "react";
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

function Biography() {
    return (
        // <Box height="1000%">
            <Paper style={{ width: 1000, paddingBottom: 5 + '%', paddingTop: 5 + '%' }}>
                <div style={{ marginLeft: 40, marginRight: 40 }}>
                    <Container>
                        <Row>
                            <Col sm={2}>
                                <img
                                    src="https://cdn1.iconfinder.com/data/icons/freeline/32/account_friend_human_man_member_person_profile_user_users-512.png"
                                    // className="bg"
                                    width="200"
                                    height="200"
                                    alt="human"
                                />
                            </Col>
                            <Col sm={9}>
                                <h1>PHANUWAT SIKHARESTRAKUL</h1>
                                <h2>ASST. DEAN FOR CHAIR PERSON</h2>
                                <div>
                                    <div className="d-flex flex-row" style={{marginRight: 30 + '%'}}>
                                        <div style={{marginLeft : "auto"}}>
                                            <img 
                                                src="https://admissions.au.edu/wp-content/uploads/2019/08/science.jpg"
                                                // className="bg"
                                                width="90"
                                                height="90"
                                                alt="human"
                                            />
                                        </div>
                                        <div>
                                            <ul style={{ listStyleType: "none" }}><h4>Computer Science</h4></ul>
                                            <ul style={{ listStyleType: "none" }}><h4>Science and Technology</h4></ul>
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
                                    <Box textAlign="justify" m={1} fontSize={25}>
                                        Biography
                         </Box>
                                </Typography>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                {/* <p style={{ wordWrap: "break-word" }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard
                        dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book
                    </p> */}
                                <Typography component="div">
                                    <Box textAlign="justify" m={1}>
                                        Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum.
                                        Donec sed odio operae, eu vulputate felis rhoncus. Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum.
                                        Donec sed odio operae, eu vulputate felis rhoncus. Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum.
                                        Donec sed odio operae, eu vulputate felis rhoncus. Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum.
                                        Donec sed odio operae, eu vulputate felis rhoncus.
                         </Box>
                                </Typography>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Paper>
        // </Box>
    )
}

export default Biography;

