import React, { useState, useEffect } from "react";
import { LoginInput } from "./Input";
import { Card, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Background from "./Background";
import { useForm } from "react-hook-form";
import fetchOptions, { fetchPostOptions } from '../../fetchOptions';

import {
  HashRouter as Router,
  Link,
  useHistory
} from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: 500
  }
});

function Login(props) {
  const classes = useStyles();
  const { register, handleSubmit, control, watch, errors } = useForm();
  const [isRedirect, setIsRedirect] = useState(-1);
  const history = useHistory();

  console.log('eeror', errors);

  const onSubmit = async (data) => {
    const loginInput = { username: data.username, password: data.password };
    fetch(`${process.env.REACT_APP_API_URL}/${props.entryPath}/login`,
      {
        ...fetchPostOptions, body: JSON.stringify(loginInput)
      })
      .then(res => {
        if (res.status === 200) {
          setIsRedirect(1);
        } else {
          setIsRedirect(0);
        }
        return res.json();
      })
      .then(res => {
        props.setUser(res);
      })
  }

  useEffect(() => {
    props.setIsEntryPage(true);
  }, [])

  useEffect(() => {
    if (props.user) {
      if (isRedirect  === 1) {
        props.setIsEntryPage(false);
        history.push("/member")
      } else if (isRedirect === 0) {
        alert(props.user.message);
      }
    }
  }, [props.user])

  return (
    <div className="container">
      <Background />
      <div className="box" style={{ borderRadius: 15 }}>
        <div className="card" style={{ borderRadius: 15 }}>
          <Card className={classes.root} style={{ borderRadius: 15 }}>
            <CardContent>
              <h3 className="east-bay-font">SENSEITION</h3>
              <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <LoginInput type="text" placeholder="Username" register={register} name="username" />
                <LoginInput type="password" placeholder="Password" register={register} name="password" />
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
