import React from "react";

import MuiButton from "@material-ui/core/Button";
import MuiTypography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import MuiListIcon from "@material-ui/icons/List";

const useStyles = makeStyles((theme) => ({
  title: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  titleText: {
    marginLeft: theme.spacing(2),
    textTransform: "none",
  },
}));

export default () => {
  const classes = useStyles();

  return (
    <MuiButton className={classes.title} href="/">
      <MuiListIcon />
      <MuiTypography className={classes.titleText} variant="h6">
        Lists
      </MuiTypography>
    </MuiButton>
  );
};
