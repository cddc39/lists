import React from "react";

import MuiFab from "@material-ui/core/Fab";
import { makeStyles } from "@material-ui/core/styles";

import MuiAddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  fab: {
    bottom: theme.spacing(3),
    position: "absolute",
    right: theme.spacing(3),
  },
}));

export default () => {
  const classes = useStyles();

  return (
    <MuiFab
      aria-label="add"
      className={classes.fab}
      color="primary"
      href="/add-list"
    >
      <MuiAddIcon />
    </MuiFab>
  );
};
