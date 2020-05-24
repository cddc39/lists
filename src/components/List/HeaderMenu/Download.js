import React from "react";
import { useHistory } from "react-router-dom";

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
  const history = useHistory();

  const handleClick = () => {
    closeMenu();
    history.push(`#download-list`);
  };

  return (
    <MuiMenuItem onClick={handleClick}>
      <MuiDownloadIcon className={classes.icon} />
      Download
    </MuiMenuItem>
  );
});
