import React from "react";

import MuiDivider from "@material-ui/core/Divider";
import MuiMenu from "@material-ui/core/Menu";
import MuiIconButton from "@material-ui/core/IconButton";

import MuiMoreVertIcon from "@material-ui/icons/MoreVert";

import About from "./About";
import Account from "./Account";
import SortLists from "./SortLists";

export default () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <MuiIconButton
        aria-controls="menu"
        aria-describedby="menu"
        aria-haspopup="true"
        aria-label="menu"
        color="inherit"
        onClick={handleClick}
      >
        <MuiMoreVertIcon />
      </MuiIconButton>
      <MuiMenu
        anchorEl={anchorEl}
        anchorOrigin={{
          horizontal: "right",
          vertical: "bottom",
        }}
        id="menu"
        getContentAnchorEl={null}
        keepMounted
        onClose={handleClose}
        open={open}
      >
        <Account closeMenu={handleClose.bind(this)} />
        <SortLists closeMenu={handleClose.bind(this)} />
        <MuiDivider />
        <About closeMenu={handleClose.bind(this)} />
      </MuiMenu>
    </div>
  );
};
