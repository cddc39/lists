import React from "react";

import MuiAppBar from "@material-ui/core/AppBar";
import MuiButton from "@material-ui/core/Button";
import MuiIconButton from "@material-ui/core/IconButton";
import MuiToolbar from "@material-ui/core/Toolbar";
import MuiTypography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import MuiBackIcon from "@material-ui/icons/ArrowBack";

import MenuButton from "./HeaderMenu/MenuButton";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  spacer: {
    flexGrow: 1,
  },
  header: {
    color: "black",
  },
  titleText: {
    textTransform: "none",
  },
}));

export default ({ title }) => {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <MuiAppBar position="static">
        <MuiToolbar>
          <MuiIconButton
            aria-controls="menu"
            aria-describedby="menu"
            aria-haspopup="true"
            aria-label="menu"
            className={classes.header}
            color="inherit"
            href="/"
          >
            <MuiBackIcon />
          </MuiIconButton>
          <MuiButton href={window.location.pathname}>
            <MuiTypography className={classes.titleText} variant="h6">
              {title}
            </MuiTypography>
          </MuiButton>
          <div className={classes.spacer}></div>
          <MenuButton />
        </MuiToolbar>
      </MuiAppBar>
    </header>
  );
};
