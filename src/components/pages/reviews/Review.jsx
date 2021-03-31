import {Box, Paper, Typography} from "@material-ui/core";
import {Row} from "react-bootstrap";
import React from "react";
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



function Review(props) {
    return (
        <Paper className="wrapper" style={{marginTop: 30, marginRight: 100, marginLeft: 100, marginBottom: 30, padding: 50, maxHeight: 500}}>
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
                    <h4>Rate: 3/5</h4>
                </div>
            </Row>
            <div>
                <Typography component="div">
                    <Box textAlign="justify" m={4}>
                        Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum.
                        Donec sed odio operae, eu vulputate felis rhoncus. Ambitioni dedisse scripsisse iudicaretur.
                        Cras mattis iudicium purus sit amet fermentum.
                        Donec sed odio operae, eu vulputate felis rhoncus. Ambitioni dedisse scripsisse iudicaretur.
                        Cras mattis iudicium purus sit amet fermentum.
                        Donec sed odio operae, eu vulputate felis rhoncus. Ambitioni dedisse scripsisse iudicaretur.
                        Cras mattis iudicium purus sit amet fermentum.
                        Donec sed odio operae, eu vulputate felis rhoncus.
                    </Box>
                </Typography>
                <Divider />
            </div>
        </Paper>
    )
}

export default Review