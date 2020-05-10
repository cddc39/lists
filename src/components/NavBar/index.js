import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ListIcon from "@material-ui/icons/List";
import MenuButton from "./MenuButton";

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
    marginLeft: theme.spacing(1),
  },
  titleText: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(1),
    textDecoration: "none",
    textTransform: "none",
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button className={classes.title} href="#">
            <ListIcon className={classes.titleIcon} />
            <Typography className={classes.titleText} variant="h6">
              Lists
            </Typography>
          </Button>
          <div className={classes.spacer}></div>
          <MenuButton />
        </Toolbar>
      </AppBar>
    </header>
  );
}
