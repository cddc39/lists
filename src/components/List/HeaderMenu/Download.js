import React from "react";

import MuiLink from "@material-ui/core/Link";
import MuiMenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";

import MuiDownloadIcon from "@material-ui/icons/CloudDownload";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
}));

export default React.forwardRef(({ closeMenu }, ref) => {
  const classes = useStyles();

  return (
    <MuiLink href="#download">
      <MuiMenuItem onClick={closeMenu}>
        <MuiDownloadIcon className={classes.icon} />
        Download
      </MuiMenuItem>
    </MuiLink>
  );
});
