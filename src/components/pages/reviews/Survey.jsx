import { Input, Paper, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { Col, Row } from "react-bootstrap";
import React, { useState, Fragment, useEffect } from "react";
import { fetchPostOptions } from "../../fetchOptions";
import { useForm } from "react-hook-form";
import { makeStyles } from '@material-ui/core/styles';
import Rating from "react-rating";

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

function Survey(props) {
    const { register, handleSubmit, control, watch, errors } = useForm();
    const dropdownClasses = dropdownStyles();
    const [courseId, setCourseId] = useState(0);
    const [rating1, setRating1] = useState(0);
    const [rating2, setRating2] = useState(0);
    const [rating3, setRating3] = useState(0);
    const [rating4, setRating4] = useState(0);
    const [rating5, setRating5] = useState(0);
    const [averageRating, setAverageRating] = useState(0);

    const filterCourse = (event) => {
        console.log(event.target.value);
        setCourseId(event.target.value);
    }

    console.log('error occur', errors);
    const onSubmit = async (data) => {
        console.log(rating1, rating2, rating3, rating4, rating5);
        console.log('ddffdfdfdf', data);
        console.log(props.course)

        if (courseId == 0) {
            alert('please select course');
        } else {
            const rateInput = {
                answerQuestion1: rating1,
                answerQuestion2: rating2,
                answerQuestion3: rating3,
                answerQuestion4: rating4,
                answerQuestion5: rating5,
                userId: props.user.id,
                courseId: courseId,
                teacherId: props.teacher.teacherId,
                reviewMessage: data.reviewMessage
            }
            console.log('rateInput', rateInput);
            fetch(`${[process.env.REACT_APP_API_URL]}/survey/surveys`,
                {
                    ...fetchPostOptions, body: JSON.stringify(rateInput)
                })
                .then(res => {
                    if (!res.ok) {
                        throw res
                    } else {
                        alert('done')
                    }
                })
                .catch(err => {
                    return err.json()
                });
        }
    }

    useEffect( () => {
        setAverageRating((rating1 + rating2 + rating3 + rating4 + rating5) / 5);
    })

    return (
        <Fragment>
            <Col sm={6}>
                <Paper style={{ borderRadius: 15, marginLeft: 20, marginTop: 30, marginBottom: 30 }}>

                    <div style={{ marginTop: 30, marginBottom: 30, paddingTop: 30, paddingLeft: 30, paddingRight: 30 }}>
                        <h5>1. Is well-prepared for class (e.g. ppt. hard-outs, etc.) ?</h5>
                        <div>
                            <Rating
                                name="answerQuestion1"
                                fractions={1}
                                initialRating={rating1}
                                onClick={rate => setRating1(rate)}
                            />
                            <p>Rating: {rating1}</p>
                        </div>
                        <h5>2. Treats students fairly.</h5>
                        <div>
                            <Rating
                                name="answerQuestion2"
                                fractions={1}
                                initialRating={rating2}
                                onClick={rate => setRating2(rate)}
                            />
                            <p>Rating: {rating2}</p>
                        </div>
                        <h5>3. Shows students their mistakes and how to correct them.</h5>
                        <div>
                            <Rating
                                name="answerQuestion3"
                                fractions={1}
                                initialRating={rating3}
                                onClick={rate => setRating3(rate)}
                            />
                            <p>Rating: {rating3}</p>
                        </div>
                        <h5>4. Is punctual by starting and finishing the class on time ?</h5>
                        <div>
                            <Rating
                                name="answerQuestion4"
                                fractions={1}
                                initialRating={rating4}
                                onClick={rate => setRating4(rate)}
                            />
                            <p>Rating: {rating4}</p>
                        </div>
                        <h5>5. Is open to students' comments and suggestions ?</h5>
                        <div>
                            <Rating
                                name="answerQuestion5"
                                fractions={1}
                                initialRating={rating5}
                                onClick={rate => setRating5(rate)}
                            />
                            <p>Rating: {rating5}</p>
                        </div>
                    </div>
                </Paper>
                <Paper style={{ borderRadius: 15, marginLeft: 20, marginTop: 30, marginBottom: 30 }}>
                    <div style={{
                        marginTop: 30,
                        marginBottom: 30,
                        paddingTop: 30,
                        paddingLeft: 30,
                        paddingRight: 30,
                        paddingBottom: 10
                    }}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input name="reviewMessage"
                                type="text"
                                placeholder="Comment"
                                className="border border-dark text-secondary comment-survey-box login-input"
                                style={{ borderRadius: 100 }}
                                inputRef={register({ required: true })}
                            />
                        </form>
                    </div>
                </Paper>
            </Col>

            <Col sm={6}>
                <Paper style={{ borderRadius: 15, marginLeft: 20, marginTop: 30, marginBottom: 30 }}>
                    <FormControl size="small" variant="outlined" className={dropdownClasses.formControl} margin="normal">
                        <InputLabel autoWidth="false" style={{ fontSize: 13, textAlign: "center" }}>Select Course</InputLabel>
                        <Select style={{ height: 37, marginBottom: 15, marginLeft: 5, width: 60 + "%" }}
                            // native
                            // labelWidth="10"
                            // value={state.age}
                            onChange={filterCourse}
                            label="Select Course"
                        >
                            {props.course && props.course.map((x) => (
                                <MenuItem key={x.courseId} value={x.courseId}>
                                    {x.courseName}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <div className="center"
                        style={{ marginTop: 30, marginBottom: 30, paddingTop: 10, paddingLeft: 30, paddingRight: 30 }}>
                        <h2 style={{ marginTop: 30, marginBottom: 30, paddingTop: 150 }}>AVERAGE RATING</h2>
                        <h1 className="biggest-font"
                            style={{ marginTop: 30, marginBottom: 170, paddingTop: 30 }}>{averageRating}</h1>
                    </div>
                </Paper>
                <Paper style={{ borderRadius: 15, marginLeft: 20, marginTop: 30, marginBottom: 30, paddingBottom: 1 }}>
                    <div style={{ marginTop: 30, marginBottom: 30, paddingTop: 30, paddingLeft: 30, paddingRight: 30 }}>
                        <button type="submit" onClick={handleSubmit(onSubmit)}
                            id="submit"
                            className="border border-dark east-bay-button text-light comment-survey-box"
                            style={{ borderRadius: 10 }}>
                            Submit
                        </button>
                    </div>
                </Paper>
            </Col>
        </Fragment >
    )
}

export default Survey