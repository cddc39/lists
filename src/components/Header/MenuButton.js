import React from "react";
import { Divider, Menu, MenuItem } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MoreVert from "@material-ui/icons/MoreVert";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Sort from "@material-ui/icons/Sort";
import Info from "@material-ui/icons/Info";

export default function NavBarMenu() {
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
      <IconButton
        aria-controls="menu"
        aria-describedby="menu"
        aria-haspopup="true"
        aria-label="menu"
        color="inherit"
        onClick={handleClick}
      >
        <MoreVert />
      </IconButton>
      <Menu
        id="menu"
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        getContentAnchorEl={null}
        keepMounted
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <AccountCircle className="mr-3" />
          Account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Sort className="mr-3" />
          Sort lists
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <Info className="mr-3" />
          About
        </MenuItem>
      </Menu>
    </div>
  );
}