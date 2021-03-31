import { Box, Paper, Typography } from "@material-ui/core";
import { Row } from "react-bootstrap";
import React, { useState, useEffect, Fragment } from "react";
import Divider from "@material-ui/core/Divider";
import fetchOptions, { fetchPostOptions } from '../../fetchOptions';

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
            <Row className="mt-5">
                <div>
                    <img
                        src="https://www.pngkit.com/png/full/796-7963534_individuals-person-icon-circle-png.png"
                        width="40px" height="40px"
                        alt="human"
                        className="mr-5"
                    />
                </div>
                <div>
                    <h4 className="mr-large">{props.userFullName}</h4>
                </div>
                <div>
                    <h4>Rate: {props.rate}/{props.maxRate}</h4>
                </div>
            </Row>
            <div>
                <Typography component="div">
                    <Box textAlign="justify" ml={8} mt={4} mb={4} fontSize={25}>
                        {props.comment}
                    </Box>
                </Typography>
                <Divider />
            </div>
        </Fragment>
    )
}

function Review(props) {
    const [reviews, setReviews] = useState();
    useEffect(() => {
        if (props.faculty) {
            fetch(`${process.env.REACT_APP_API_URL}/${props.reviewPath}/reviews?teacherId=${props.teacherId}&pageSize=10`, fetchOptions)
                .then(res => {
                    if (!res.ok) { throw res }
                    return res.json();
                })
                .then((result) => {
                    setReviews(result);
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
            {reviews && reviews.topReviews.map(i => <ReviewComponent {...i} key={i.reviewId}/>)}
        </Paper>
    )
}

export default Review