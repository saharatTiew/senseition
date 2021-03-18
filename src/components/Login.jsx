import React from "react";
import Input from "./Input";
import { Card, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: 500
  }
});

function Login() {
  const classes = useStyles();
  // className={classes.root}
  return (
    <div className="box">
      <div className="card">
        <Card className={classes.root}>
          <CardContent>
            <h3 className="east-bay-font">SENSEITION</h3>
            <form className="form">
              <Input type="text" placeholder="Username" />
              <Input type="password" placeholder="Password" />
              <button
                type="submit"
                className="border border-dark east-bay-button text-light"
              >
                Login
              </button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Login;
