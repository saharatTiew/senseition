import React, {useEffect, useState} from "react";
import { LoginInput, RegisterInput } from "./Input";
import { Card, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Background from "./Background";
import { Container, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import {
    HashRouter as Router,
    Link, useHistory
} from "react-router-dom";
import {fetchPostOptions} from "../../fetchOptions";

const useStyles = makeStyles({
    root: {
        width: 900,
        height: 400
    }
});

function check() {
    if (document.getElementById('password').value ==
        document.getElementById('confirm_password').value) {
        document.getElementById('message').style.color = 'green';
        document.getElementById('message').innerHTML = 'matching';
    } else {
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML = 'not matching';
    }
}

function Register(props) {
    const { register, handleSubmit, control, watch, errors } = useForm();
    const [isRedirect, setIsRedirect] = useState(-1);
    // const onSubmit = (data) => alert(JSON.stringify(data));
    const classes = useStyles();
    const history = useHistory();

    console.log('eeror', errors);

    const onSubmit = async  (data) => {
        const registerInput = { firstName: data.firstName, lastName: data.lastName, email: data.email, username: data.username, password: data.password};
        console.log("HEELLOO:" + JSON.stringify(data));
        fetch(`${[process.env.REACT_APP_API_URL]}/${props.entryPath}/register`,
            {
                ...fetchPostOptions, body: JSON.stringify(registerInput)
            })
            .then(res => {
                if (!res.ok) {
                    throw res
                    console.log("Successful")
                }
            })
            .catch(err => {
                return err.json()
            }).then(err => { console.log(err)})
    }

    useEffect(() => {
        props.setIsEntryPage(true);
    }, [])

    return (
        // <div className="container">
        <Container>
            <Background />
            <div className="box" style={{ borderRadius : 15}}>
                <div className="card" style={{ borderRadius : 15}}>
                    <Card className={classes.root} style={{ borderRadius : 15}}>
                        <CardContent>
                            <h3 className="east-bay-font mt-4">REGISTRATION</h3>
                            <form className="form register-form" onSubmit={handleSubmit(onSubmit)}>
                                <Row>
                                    <Col sm={5}>
                                        <RegisterInput type="text" placeholder="First name" name="firstName" register={register} />
                                    </Col>
                                    <Col sm={5}>
                                        <RegisterInput type="text" placeholder="Last name" name="lastName" register={register} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={5}>
                                        <RegisterInput type="email" placeholder="E-mail address" name="email" onclick={() => {history.push('/login')}} register={register} />
                                    </Col>
                                    <Col sm={5}>
                                        <RegisterInput type="text" placeholder="Username" name="username" onkeyup={() => { check() }} register={register} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={5}>
                                        <RegisterInput type="password" id="password" placeholder="Password" name="password" onkeyup={() => { check() }} register={register} />
                                    </Col>
                                    <Col sm={5}>
                                        <RegisterInput type="password" id="confirm_password" placeholder="Confirmed password" name="password2" register={register}/>
                                        <span id='message'></span>

                                    </Col>
                                </Row>

                                <button type="submit" id="submit" className="border border-dark east-bay-button register-btn text-light btn btn-md mb-3">
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
