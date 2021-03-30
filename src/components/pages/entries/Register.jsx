import React from "react";
import { LoginInput, RegisterInput } from "./Input";
import { Card, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Background from "./Background";
import { Container, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";

import {
    HashRouter as Router,
    Link
} from "react-router-dom";

const useStyles = makeStyles({
    root: {
        width: 900,
        height: 400
    }
});


function Register() {
    const { register, handleSubmit, control, watch, errors } = useForm();
    const onSubmit = (data) => alert(JSON.stringify(data));

    const classes = useStyles();
    return (
        // <div className="container">
        <Container>
            <Background />
            <div className="box">
                <div className="card">
                    <Card className={classes.root}>
                        <CardContent>
                            <h3 className="east-bay-font mt-4">REGISTRATION</h3>
                            <form className="form register-form" onSubmit={handleSubmit(onSubmit)}>
                                <Row>
                                    <Col sm={5}>
                                        <RegisterInput type="text" placeholder="First name" name="first-name" />
                                    </Col>
                                    <Col sm={5}>
                                        <RegisterInput type="text" placeholder="Last name" name="last-name" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={5}>
                                        <RegisterInput type="email" placeholder="E-mail address" name="email" />
                                    </Col>
                                    <Col sm={5}>
                                        <RegisterInput type="text" placeholder="Username" name="username" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={5}>
                                        <RegisterInput type="password" placeholder="Password" name="password" />
                                    </Col>
                                    <Col sm={5}>
                                        <RegisterInput type="password" placeholder="Confirmed password" name="password2" />
                                    </Col>
                                </Row>

                                <button type="submit" className="border border-dark east-bay-button register-btn text-light btn btn-md mb-3">
                                    Register
                                </button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </Container>
    );
}

export default Register;
