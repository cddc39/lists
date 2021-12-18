import React from "react";

import MuiDialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiIconButton from "@material-ui/core/IconButton";
import MuiList from "@material-ui/core/List";
import MuiListItem from "@material-ui/core/ListItem";
import MuiMenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";

import MuiCloseIcon from "@material-ui/icons/Close";
import MuiDownloadIcon from "@material-ui/icons/CloudDownload";

const useStyles = makeStyles((theme) => ({
  closeButton: {
    color: "black",
    // position: "absolute",
    // right: theme.spacing(1),
    // top: theme.spacing(1),
  },
  icon: {
    marginRight: theme.spacing(2),
  },
}));

const DownloadChoices = () => {
  return (
    <MuiList>
      <MuiListItem button>Download as Markdown</MuiListItem>
      <MuiListItem button>Download as JSON</MuiListItem>
    </MuiList>
  );
};

export default ({ closeMenu }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const title = "Download list";

  const handleOpen = () => {
    setOpen(true);
    closeMenu();
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <MuiMenuItem onClick={handleOpen}>
        <MuiDownloadIcon className={classes.icon} />
        {title}
      </MuiMenuItem>
      <MuiDialog
        aria-labelledby="download-dialog-title"
        onClose={handleClose}
        open={open}
      >
        <MuiDialogTitle id="download-dialog-title" onClose={handleClose}>
          <div>
            {title}
            <MuiIconButton
              aria-label="close"
              className={classes.closeButton}
              onClick={handleClose}
              size="small"
            >
              <MuiCloseIcon />
            </MuiIconButton>
          </div>
        </MuiDialogTitle>
        <DownloadChoices />
      </MuiDialog>
    </div>
  );
};
