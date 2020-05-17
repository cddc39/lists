import React from "react";
import { Menu, MenuItem } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MoreVert from "@material-ui/icons/MoreVert";
import DownloadIcon from "@material-ui/icons/GetApp";
import EditIcon from "@material-ui/icons/Edit";
import ShareIcon from "@material-ui/icons/Share";
import SortMenuItem from "./SortMenuItem";

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
          <DownloadIcon className="mr-3" />
          Download
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <EditIcon className="mr-3" />
          Edit
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ShareIcon className="mr-3" />
          Share
        </MenuItem>
        <SortMenuItem handleParentClose={handleClose.bind(this)} />
      </Menu>
    </div>
  );
}
