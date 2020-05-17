import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import BackIcon from "@material-ui/icons/ArrowBack";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  spacer: {
    flexGrow: 1,
  },
  title: {
    color: "black",
  },
  titleIcon: {
    // marginLeft: theme.spacing(1),
  },
  titleText: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(1),
    textDecoration: "none",
    textTransform: "none",
  },
}));

export default withRouter(({ history }) => {
  const classes = useStyles();

  const handleClick = () => {
    history.goBack();
  };

  return (
    <header className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <BackIcon className={classes.titleIcon} onClick={handleClick} />
          <Typography className={classes.titleText} variant="h6">
            About
          </Typography>
        </Toolbar>
      </AppBar>
    </header>
  );
});
