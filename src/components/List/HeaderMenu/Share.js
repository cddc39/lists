import React from "react";

import MuiButton from "@material-ui/core/Button";
import MuiCard from "@material-ui/core/Card";
import MuiCardContent from "@material-ui/core/CardContent";
import MuiCardMedia from "@material-ui/core/CardMedia";
import MuiDialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiFormControl from "@material-ui/core/FormControl";
import MuiGrid from "@material-ui/core/Grid";
import MuiIconButton from "@material-ui/core/IconButton";
import MuiMenuItem from "@material-ui/core/MenuItem";
import MuiTextField from "@material-ui/core/TextField";
import MuiTypography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import MuiIconAdd from "@material-ui/icons/Add";
import MuiIconCancel from "@material-ui/icons/Cancel";
import MuiIconCopy from "@material-ui/icons/FileCopy";
import MuiIconClose from "@material-ui/icons/Close";
import MuiIconLink from "@material-ui/icons/Link";
import MuiIconRemoveCircle from "@material-ui/icons/RemoveCircle";
import MuiIconShare from "@material-ui/icons/Share";

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

const Share = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  return (
    <MuiCard>
      <MuiCardMedia image="test" title="List image" />
      <MuiCardContent>
        <MuiFormControl>
          <MuiGrid
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
            spacing={3}
          >
            <MuiGrid item>
              <MuiGrid container spacing={1} alignItems="flex-end">
                <MuiGrid item>
                  <MuiTextField
                    id="link"
                    defaultValue={window.location.href}
                    InputProps={{
                      readOnly: true,
                    }}
                    label="Link"
                  />
                </MuiGrid>
                <MuiGrid item>
                  <MuiIconButton onClick={handleCopy}>
                    <MuiIconCopy />
                  </MuiIconButton>
                </MuiGrid>
              </MuiGrid>
            </MuiGrid>
            <MuiGrid item container justify="flex-end">
              <MuiButton
                color="secondary"
                startIcon={<MuiIconLink />}
                variant="contained"
              >
                Create new link
              </MuiButton>
            </MuiGrid>
            <MuiGrid item container justify="flex-end">
              <MuiButton
                color="secondary"
                startIcon={<MuiIconRemoveCircle />}
                variant="contained"
              >
                Remove link
              </MuiButton>
            </MuiGrid>
            <MuiGrid item>
              <MuiTypography variant="h6">People</MuiTypography>
            </MuiGrid>
            <MuiGrid item>
              <MuiGrid container spacing={1} alignItems="flex-end">
                <MuiGrid item>
                  <MuiTextField
                    id="email-1"
                    defaultValue="xyz@gmail.com"
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                  <MuiTextField
                    id="standard-select-currency"
                    select
                    value="edit"
                  >
                    <MuiMenuItem key="edit" value="edit">
                      edit
                    </MuiMenuItem>
                    <MuiMenuItem key="view" value="view">
                      view
                    </MuiMenuItem>
                  </MuiTextField>
                </MuiGrid>
                <MuiGrid item>
                  <MuiIconButton>
                    <MuiIconCancel />
                  </MuiIconButton>
                </MuiGrid>
              </MuiGrid>
            </MuiGrid>
            <MuiGrid item>
              <MuiGrid container spacing={1} alignItems="flex-end">
                <MuiGrid item>
                  <MuiTextField id="new-email" defaultValue="" />
                  <MuiTextField
                    id="standard-select-currency"
                    select
                    value="view"
                  >
                    <MuiMenuItem key="edit" value="edit">
                      edit
                    </MuiMenuItem>
                    <MuiMenuItem key="view" value="view">
                      view
                    </MuiMenuItem>
                  </MuiTextField>
                </MuiGrid>
                <MuiGrid item>
                  <MuiIconButton>
                    <MuiIconAdd />
                  </MuiIconButton>
                </MuiGrid>
              </MuiGrid>
            </MuiGrid>
          </MuiGrid>
        </MuiFormControl>
      </MuiCardContent>
    </MuiCard>
  );
};

export default ({ closeMenu }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const title = "Share list";

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
        <MuiIconShare className={classes.icon} />
        {title}
      </MuiMenuItem>
      <MuiDialog
        aria-labelledby="share-dialog-title"
        onClose={handleClose}
        open={open}
      >
        <MuiDialogTitle id="share-dialog-title" onClose={handleClose}>
          <div>
            {title}
            <MuiIconButton
              aria-label="close"
              className={classes.closeButton}
              onClick={handleClose}
              size="small"
            >
              <MuiIconClose />
            </MuiIconButton>
          </div>
        </MuiDialogTitle>
        <Share />
      </MuiDialog>
    </div>
  );
};
