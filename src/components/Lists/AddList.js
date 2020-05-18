import React from "react";

import MuiFab from "@material-ui/core/Fab";

import MuiAddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";

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
    <div className={classes.root}>
      <MuiFab className={classes.fab} color="primary" aria-label="add">
        <MuiAddIcon />
      </MuiFab>
    </div>
  );
};
