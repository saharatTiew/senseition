import {Input, Paper} from "@material-ui/core";
import {Col, Row} from "react-bootstrap";
import React, {useState, Fragment, useEffect} from "react";
import {fetchPostOptions} from "../../fetchOptions";
import {useForm} from "react-hook-form";
import {makeStyles} from '@material-ui/core/styles';
import Rating from "react-rating";

function Survey(props) {
    const {register, handleSubmit, control, watch, errors} = useForm();
    const [rating1, setRating1] = useState(0);
    const [rating2, setRating2] = useState(0);
    const [rating3, setRating3] = useState(0);
    const [rating4, setRating4] = useState(0);
    const [rating5, setRating5] = useState(0);

    const useStyles = makeStyles({
        root: {
            width: 200,
            display: 'flex',
            alignItems: 'center',
        },
    });

    const onSubmit = async (data) => {
        const rateInput = {
            answerQuestion1: data.answerQuestion1,
            answerQuestion2: data.answerQuestion2,
            answerQuestion3: data.answerQuestion3,
            answerQuestion4: data.answerQuestion4,
            answerQuestion5: data.answerQuestion5
        }
        console.log("RATE:" + JSON.stringify(data));
        fetch(`${[process.env.REACT_APP_API_URL]}/${props.entryPath}/surveys`,
            {
                ...fetchPostOptions, body: JSON.stringify(rateInput)
            })
            .then(res => {
                if (!res.ok) {
                    throw res
                }
            })
            .catch(err => {
                return err.json()
            }).then(err => {
            console.log(err)
        })
    }

    // useEffect(() => {
    //     props.setIsEntryPage(true);
    // }, [])

    return (
        <Fragment>
            <Col sm={6}>
                <Paper style={{borderRadius: 15, marginLeft: 20, marginTop: 30, marginBottom: 30}}>
                    <div style={{marginTop: 30, marginBottom: 30, paddingTop: 30, paddingLeft: 30, paddingRight: 30}}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h5>1. Is well-prepared for class (e.g. ppt. hard-outs, etc.) ?</h5>
                            <div>
                                <Rating
                                    fractions={2}
                                    initialRating={rating1}
                                    onClick={rate => setRating1(rate)}
                                />
                                <p>Rating: {rating1}</p>
                            </div>
                            <h5>2. Treats students fairly.</h5>
                            <div>
                                <Rating
                                    fractions={2}
                                    initialRating={rating2}
                                    onClick={rate => setRating2(rate)}
                                />
                                <p>Rating: {rating2}</p>
                            </div>
                            <h5>3. Shows students their mistakes and how to correct them.</h5>
                            <div>
                                <Rating
                                    fractions={2}
                                    initialRating={rating3}
                                    onClick={rate => setRating3(rate)}
                                />
                                <p>Rating: {rating3}</p>
                            </div>
                            <h5>4. Is punctual by starting and finishing the class on time ?</h5>
                            <div>
                                <Rating
                                    fractions={2}
                                    initialRating={rating4}
                                    onClick={rate => setRating4(rate)}
                                />
                                <p>Rating: {rating4}</p>
                            </div>
                            <h5>5. Is open to students' comments and suggestions ?</h5>
                            <div>
                                <Rating
                                    fractions={2}
                                    initialRating={rating5}
                                    onClick={rate => setRating5(rate)}
                                />
                                <p>Rating: {rating5}</p>
                            </div>
                        </form>
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
                         style={{marginTop: 30, marginBottom: 30, paddingTop: 10, paddingLeft: 30, paddingRight: 30}}>
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