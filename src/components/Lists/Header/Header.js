import React from "react";

import MuiAppBar from "@material-ui/core/AppBar";
import MuiToolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";

import Menu from "./Menu/";
import Title from "./Title";

const useStyles = makeStyles((theme) => ({
  header: {
    flexGrow: 1,
  },
  spacer: {
    flexGrow: 1,
  },
}));

export default () => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <MuiAppBar position="static">
        <MuiToolbar>
          <Title />
          <div className={classes.spacer} />
          <Menu />
        </MuiToolbar>
      </MuiAppBar>
    </header>
  );
};
