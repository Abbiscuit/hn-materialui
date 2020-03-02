import React from "react";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Login from "../components/Login";
import Signup from "../components/Signup";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {}
}));

const AuthPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={6} lg={6}>
            <Login />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Signup />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AuthPage;
