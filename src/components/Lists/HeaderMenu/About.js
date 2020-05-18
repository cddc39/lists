import React from "react";

import MuiLink from "@material-ui/core/Link";
import MuiMenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";

import MuiInfoIcon from "@material-ui/icons/Info";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
}));

export default ({ closeMenu }) => {
  const classes = useStyles();

  return (
    <MuiLink href="/about">
      <MuiMenuItem onClick={closeMenu}>
        <MuiInfoIcon className={classes.icon} />
        About
      </MuiMenuItem>
    </MuiLink>
  );
};
