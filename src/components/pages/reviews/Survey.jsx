import {Input, Paper} from "@material-ui/core";
import {Col, Row} from "react-bootstrap";
import React, {useState, Fragment} from "react";

function Survey() {
    return (
        <Fragment>
            <Col sm={6}>
                <Paper style={{borderRadius: 15, marginLeft: 20, marginTop: 30, marginBottom: 30}}>
                    <div style={{marginTop: 30, marginBottom: 30, paddingTop: 30, paddingLeft: 30, paddingRight: 30}}>
                        <h5>1. Hello World</h5>
                        <div className="stars">
                            <form action="">
                                <input className="star star-5" id="star-1-5" type="radio" name="star"/>
                                <label className="star star-5" htmlFor="star-1-5"/>
                                <input className="star star-4" id="star-1-4" type="radio" name="star"/>
                                <label className="star star-4" htmlFor="star-1-4"/>
                                <input className="star star-3" id="star-1-3" type="radio" name="star"/>
                                <label className="star star-3" htmlFor="star-1-3"/>
                                <input className="star star-2" id="star-1-2" type="radio" name="star"/>
                                <label className="star star-2" htmlFor="star-1-2"/>
                                <input className="star star-1" id="star-1-1" type="radio" name="star"/>
                                <label className="star star-1" htmlFor="star-1-1"/>
                            </form>
                        </div>
                        <h5>2. Hello World</h5>
                        <div className="stars">
                            <form action="">
                                <input className="star star-5" id="star-2-5" type="radio" name="star"/>
                                <label className="star star-5" htmlFor="star-2-5"/>
                                <input className="star star-4" id="star-2-4" type="radio" name="star"/>
                                <label className="star star-4" htmlFor="star-2-4"/>
                                <input className="star star-3" id="star-2-3" type="radio" name="star"/>
                                <label className="star star-3" htmlFor="star-2-3"/>
                                <input className="star star-2" id="star-2-2" type="radio" name="star"/>
                                <label className="star star-2" htmlFor="star-2-2"/>
                                <input className="star star-1" id="star-2-1" type="radio" name="star"/>
                                <label className="star star-1" htmlFor="star-1"/>
                            </form>
                        </div>
                        <h5>3. Hello World</h5>
                        <div className="stars">
                            <form action="">
                                <input className="star star-5" id="star-3-5" type="radio" name="star"/>
                                <label className="star star-5" htmlFor="star-3-5"/>
                                <input className="star star-4" id="star-3-4" type="radio" name="star"/>
                                <label className="star star-4" htmlFor="star-3-4"/>
                                <input className="star star-3" id="star-3-3" type="radio" name="star"/>
                                <label className="star star-3" htmlFor="star-3-3"/>
                                <input className="star star-2" id="star-3-2" type="radio" name="star"/>
                                <label className="star star-2" htmlFor="star-3-2"/>
                                <input className="star star-1" id="star-3-1" type="radio" name="star"/>
                                <label className="star star-1" htmlFor="star-3-1"/>
                            </form>
                        </div>
                        <h5>4. Hello World</h5>
                        <div className="stars">
                            <form action="">
                                <input className="star star-5" id="star-4-5" type="radio" name="star"/>
                                <label className="star star-5" htmlFor="star-4-5"/>
                                <input className="star star-4" id="star-4-4" type="radio" name="star"/>
                                <label className="star star-4" htmlFor="star-4-4"/>
                                <input className="star star-3" id="star-4-3" type="radio" name="star"/>
                                <label className="star star-3" htmlFor="star-4-3"/>
                                <input className="star star-2" id="star-4-2" type="radio" name="star"/>
                                <label className="star star-2" htmlFor="star-4-2"/>
                                <input className="star star-1" id="star-4-1" type="radio" name="star"/>
                                <label className="star star-1" htmlFor="star-4-1"/>
                            </form>
                        </div>
                        <h5>5. Hello World</h5>
                        <div className="stars">
                            <form action="">
                                <input className="star star-5" id="star-5-5" type="radio" name="star"/>
                                <label className="star star-5" htmlFor="star-5-5"/>
                                <input className="star star-4" id="star-5-4" type="radio" name="star"/>
                                <label className="star star-4" htmlFor="star-5-4"/>
                                <input className="star star-3" id="star-5-3" type="radio" name="star"/>
                                <label className="star star-3" htmlFor="star-5-3"/>
                                <input className="star star-2" id="star-5-2" type="radio" name="star"/>
                                <label className="star star-2" htmlFor="star-5-2"/>
                                <input className="star star-1" id="star-5-1" type="radio" name="star"/>
                                <label className="star star-1" htmlFor="star-5-1"/>
                            </form>
                        </div>
                    </div>
                </Paper>
                <Paper style={{borderRadius: 15, marginLeft: 20, marginTop: 30, marginBottom: 30}}>
                    <div style={{
                        marginTop: 30,
                        marginBottom: 30,
                        paddingTop: 30,
                        paddingLeft: 30,
                        paddingRight: 30,
                        paddingBottom: 10
                    }}>
                        <form className="form">
                            <Input type="text" placeholder="Comment"
                                   className="border border-dark text-secondary comment-survey-box login-input"
                                   style={{borderRadius: 100}}/>
                        </form>
                    </div>
                </Paper>
            </Col>

            <Col sm={6}>
                <Paper style={{borderRadius: 15, marginLeft: 20, marginTop: 30, marginBottom: 30}}>
                    <div className="center"
                         style={{marginTop: 30, marginBottom: 30, paddingTop: 30, paddingLeft: 30, paddingRight: 30}}>
                        <h2 style={{marginTop: 30, marginBottom: 30, paddingTop: 150}}>AVERAGE RATING</h2>
                        <h1 className="biggest-font"
                            style={{marginTop: 30, marginBottom: 170, paddingTop: 30}}>0.00</h1>
                    </div>
                </Paper>
                <Paper style={{borderRadius: 15, marginLeft: 20, marginTop: 30, marginBottom: 30, paddingBottom: 1}}>
                    <div style={{marginTop: 30, marginBottom: 30, paddingTop: 30, paddingLeft: 30, paddingRight: 30}}>
                        <form className="form">
                            <button type="submit"
                                    className="border border-dark east-bay-button text-light comment-survey-box"
                                    style={{borderRadius: 10}}>
                                Submit
                            </button>
                        </form>
                    </div>
                </Paper>
            </Col>
        </Fragment>

    )
}

export default Survey