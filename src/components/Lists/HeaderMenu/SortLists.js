import React from "react";

import MuiButton from "@material-ui/core/Button";
import MuiDialog from "@material-ui/core/Dialog";
import MuiDialogActions from "@material-ui/core/DialogActions";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiFormControl from "@material-ui/core/FormControl";
import MuiFormControlLabel from "@material-ui/core/FormControlLabel";
import MuiIconButton from "@material-ui/core/IconButton";
import MuiMenuItem from "@material-ui/core/MenuItem";
import MuiRadio from "@material-ui/core/Radio";
import MuiRadioGroup from "@material-ui/core/RadioGroup";
import { makeStyles } from "@material-ui/core/styles";

import MuiCloseIcon from "@material-ui/icons/Close";
import MuiSortIcon from "@material-ui/icons/Sort";

const useStyles = makeStyles((theme) => ({
  closeButton: {
    color: "black",
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
  },
  icon: {
    marginRight: theme.spacing(2),
  },
}));

const SortChoices = () => {
  const [value, setValue] = React.useState("alphabetically");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <MuiFormControl component="fieldset">
      <MuiRadioGroup name="listSortOrder" value={value} onChange={handleChange}>
        <MuiFormControlLabel
          value="alphabetically"
          control={<MuiRadio />}
          label="Alphabetically"
        />
        <MuiFormControlLabel
          value="recentlyUsed"
          control={<MuiRadio />}
          label="Recently used"
        />
      </MuiRadioGroup>
    </MuiFormControl>
  );
};

export default ({ closeMenu }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const title = "Sort lists";

  const handleClick = () => {
    closeMenu();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <MuiMenuItem onClick={handleClick}>
        <MuiSortIcon className={classes.icon} />
        {title}
      </MuiMenuItem>
      <MuiDialog
        aria-labelledby="sort-dialog-title"
        onClose={handleClose}
        open={open}
      >
        <MuiDialogTitle id="sort-dialog-title" onClose={handleClose}>
          {title}
          <MuiIconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={handleClose}
          >
            <MuiCloseIcon />
          </MuiIconButton>
        </MuiDialogTitle>
        <MuiDialogContent>
          <SortChoices />
        </MuiDialogContent>
        <MuiDialogActions>
          <MuiButton
            autoFocus
            color="primary"
            onClick={handleClose}
            variant="contained"
          >
            Save
          </MuiButton>
        </MuiDialogActions>
      </MuiDialog>
    </div>
  );
};
