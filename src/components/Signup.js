import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "center",
    marginTop: theme.spacing(5)
  }
}));

const Signup = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h4" component="h1">
        Sign Up
      </Typography>
      <Typography>hello</Typography>
    </div>
  );
};

export default Signup;
