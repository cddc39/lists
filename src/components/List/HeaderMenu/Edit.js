import React from "react";

import MuiLink from "@material-ui/core/Link";
import MuiMenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";

import MuiEditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
}));

export default ({ closeMenu }) => {
  const classes = useStyles();

  return (
    <MuiLink href="#edit">
      <MuiMenuItem onClick={closeMenu}>
        <MuiEditIcon className={classes.icon} />
        Edit
      </MuiMenuItem>
    </MuiLink>
  );
};
