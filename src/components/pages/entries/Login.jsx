import React from "react";
import { LoginInput } from "./Input";
import { Card, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Background from "./Background";

import {
  HashRouter as Router,
  Link
} from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: 500
  }
});

function Login() {
  const classes = useStyles();
  return (
    <div className="container">
      <Background />
      <div className="box" style={{ borderRadius : 15}}>
        <div className="card" style={{ borderRadius : 15}}>
          <Card className={classes.root} style={{ borderRadius : 15}}>
            <CardContent>
              <h3 className="east-bay-font">SENSEITION</h3>
              <form className="form">
                <LoginInput type="text" placeholder="Username" />
                <LoginInput type="password" placeholder="Password" />
                <button type="submit" className="border border-dark east-bay-button text-light login-btn">
                  Login
              </button>
              </form>
              <Link to="/registers">
                <h5 className="east-bay-font">Register</h5>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Login;
