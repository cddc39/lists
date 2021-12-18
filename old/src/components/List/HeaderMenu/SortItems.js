import React from "react";

import MuiButton from "@material-ui/core/Button";
import MuiDialog from "@material-ui/core/Dialog";
import MuiDivider from "@material-ui/core/Divider";
import MuiDialogActions from "@material-ui/core/DialogActions";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiFormControl from "@material-ui/core/FormControl";
import MuiFormControlLabel from "@material-ui/core/FormControlLabel";
import MuiIconButton from "@material-ui/core/IconButton";
import MuiMenuItem from "@material-ui/core/MenuItem";
import MuiRadio from "@material-ui/core/Radio";
import MuiRadioGroup from "@material-ui/core/RadioGroup";
import MuiTypography from "@material-ui/core/Typography";
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

const SortChoices = ({ title }) => {
  const [value, setValue] = React.useState("alphabetically");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <MuiFormControl component="fieldset">
      <MuiTypography variant="h6">{title}</MuiTypography>
      <MuiRadioGroup
        name="listItemSortOrder"
        value={value}
        onChange={handleChange}
      >
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
  const title = "Sort items";

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
          <SortChoices title="List items" />
          <MuiDivider />
          <SortChoices title="Recent items" />
          <MuiDivider />
          <SortChoices title="Adding items" />
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
