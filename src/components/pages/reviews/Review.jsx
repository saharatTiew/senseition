import { Box, Paper, Typography } from "@material-ui/core";
import { Row } from "react-bootstrap";
import React, { useState, useEffect, Fragment } from "react";
import Divider from "@material-ui/core/Divider";

const data = [
    {
        id: 1,
        firstName: "Phanuwat",
        lastName: "Sikharestrakul",
        profileURL: "",
        posting: "jferuikfhjeruiofjeruifh",
        rate: "3"
    },
    {
        id: 2,
        firstName: "Phanuwat",
        lastName: "Sikharestrakul",
        profileURL: "",
        posting: "jferuikfhjeruiofjeruifh",
        rate: "3"
    }
]

function ReviewComponent(props) {
    return (
        <Fragment>
            <Row>
                <div>
                    <img
                        src="https://cdn1.iconfinder.com/data/icons/freeline/32/account_friend_human_man_member_person_profile_user_users-512.png"
                        width="32px" height="32px"
                        alt="human"
                        className="mr-5"
                    />
                </div>
                <div>
                    <h4 className="mr-large">Phanuwat Sikharestrakul</h4>
                </div>
                <div>
                    <h4>Rate: {props.rate}/{props.maxRate}</h4>
                </div>
            </Row>
            <div>
                <Typography component="div">
                    <Box textAlign="justify" m={4}>
                        {props.comment}
                    </Box>
                </Typography>
                <Divider />
            </div>
        </Fragment>
    )
}

function Review(props) {
    const [review, SetReview] = useState();
    useEffect(() => {
        if (props.faculty) {
            fetch(`${process.env.REACT_APP_API_URL}/${props.reviewPath}/reviews?teacherId=${props.teacherId}`, fetchOptions)
                .then(res => {
                    if (!res.ok) { throw res }
                    return res.json();
                })
                .then((result) => {
                    setReview(result);
                })
                .catch(err => {
                    alert("review not found")
                });
        } else {
            console.log('ssssssssssss');
        }
    }, [props.faculty])

    return (
        <Paper className="wrapper" style={{ marginTop: 30, marginRight: 100, marginLeft: 100, marginBottom: 30, padding: 50, maxHeight: 500 }}>
            {review && <ReviewComponent {...review} />}
        </Paper>
    )
}

export default Review