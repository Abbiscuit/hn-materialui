import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "center",
    marginTop: theme.spacing(5),
    marginRight: "auto",
    marginLeft: "auto",
    maxWidth: "500px"
  },
  buttons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%"
  },
  button: {
    marginBottom: theme.spacing(1)
  }
}));

const Signup = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card>
        <Typography variant="h4" component="h1">
          Sign Up
        </Typography>
        <form>
          <CardContent>
            <TextField label="Email" type="email" fullWidth />
            <TextField label="Password" type="password" fullWidth />
          </CardContent>
          <CardActions>
            <div className={classes.buttons}>
              <Button
                variant="contained"
                className={classes.button}
                color="primary"
                fullWidth
              >
                登録
              </Button>
              <Button
                variant="outlined"
                className={classes.button}
                color="primary"
                fullWidth
              >
                Sign in with Google
              </Button>
            </div>
          </CardActions>
        </form>
      </Card>
    </div>
  );
};

export default Signup;
