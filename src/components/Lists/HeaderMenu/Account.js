import React from "react";

import MuiMenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";

import MuiAccountCircleIcon from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
}));

export default React.forwardRef(({ closeMenu }, ref) => {
  const classes = useStyles();

  return (
    <MuiMenuItem onClick={closeMenu} ref={ref}>
      <MuiAccountCircleIcon className={classes.icon} />
      Account
    </MuiMenuItem>
  );
});
