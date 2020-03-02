import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: "600px",
    marginTop: theme.spacing(5),
    margin: "auto",
    padding: theme.spacing(1)
  },
  media: {
    height: 300
  }
}));

const ProfileCard = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card>
        <CardHeader title="山田太郎" subheader="September 14, 2020" />
        <CardMedia
          className={classes.media}
          image="https://images.unsplash.com/photo-1466112928291-0903b80a9466?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1653&q=80"
          title="John"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            こんにちは！カメラが好きで散歩がてら写真をよく撮っています！その他の趣味としては、ReactやAngularを使ってウェブアプリを作成することです！とても楽しいので、結構オススメです！
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="outlined" color="secondary" size="small">
            詳細 / 編集
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default ProfileCard;
