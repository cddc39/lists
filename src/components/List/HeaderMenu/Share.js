import React from "react";

import MuiLink from "@material-ui/core/Link";
import MuiMenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";

import MuiShareIcon from "@material-ui/icons/Share";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
}));

export default ({ closeMenu }) => {
  const classes = useStyles();

  return (
    <MuiLink href="#share">
      <MuiMenuItem onClick={closeMenu}>
        <MuiShareIcon className={classes.icon} />
        Share
      </MuiMenuItem>
    </MuiLink>
  );
};
