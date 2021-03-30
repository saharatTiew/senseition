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
        // style={{ width: 100 + '%', paddingBottom: 5 + '%', paddingTop: 5 + '%' }}
        <Paper style={{ borderRadius: 15, marginLeft: 20 }}>
            <div style={{ marginTop: 30, marginBottom: 30, paddingTop: 30, paddingLeft: 30, paddingRight: 30, paddingBottom: 30}}>
                {/* <Container> */}
                <Row>
                    <Col sm={3}>
                    {/* width: '9vw', height: '9vw'} */}
                        <div style={{borderStyle: 'solid'}}>
                            <img
                                src="https://cdn1.iconfinder.com/data/icons/freeline/32/account_friend_human_man_member_person_profile_user_users-512.png"
                                // className="bg"
                                width="50px" height="150px"
                                alt="human"
                                style={{paddingBottom : '0vw'}}
                            />
                        </div>
                    </Col>
                    <Col sm={9}>
                        {/* <h4>PHANUWAT SIKHARESTRAKUL</h4> */}
                        <Typography variant="h4">PHANUWAT SIKHARESTRAKUL</Typography>
                        <Typography variant="h6" className="mt-1 mb-3">ASST. DEAN FOR CHAIR PERSON</Typography>
                        <div style={{backgroundColor: "#F4F4F4", borderRadius: 10}}>
                            <div className="d-flex flex-row" style={{ marginRight: 35 + '%', paddingTop: 8, paddingBottom: 8, marginBottom: 20}}>
                                <div style={{ marginLeft: "auto" }}>
                                    <img
                                        src="https://admissions.au.edu/wp-content/uploads/2019/08/science.jpg"
                                        // className="bg"
                                        width="90"
                                        height="90"
                                        alt="human"
                                    />
                                </div>
                                <div>
                                    <h4 className="mt-3">Computer Science</h4>
                                    <h5>Science and Technology</h5>
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
                                Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum.
                                Donec sed odio operae, eu vulputate felis rhoncus. Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum.
                                Donec sed odio operae, eu vulputate felis rhoncus. Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum.
                                Donec sed odio operae, eu vulputate felis rhoncus. Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum.
                                Donec sed odio operae, eu vulputate felis rhoncus.
                         </Box>
                        </Typography>
                    </Col>
                </Row>
                {/* </Container> */}
            </div>
        </Paper>
        // </Box>
    )
}

export default Biography;

