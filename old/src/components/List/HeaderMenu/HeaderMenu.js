import React from "react"

import MuiMenu from "@material-ui/core/Menu"
import MuiIconButton from "@material-ui/core/IconButton"

import MuiMoreVertIcon from "@material-ui/icons/MoreVert"

import Download from "./Download"
import Edit from "./Edit"
import Share from "./Share"
import SortItems from "./SortItems"

export default () => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

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
        <div />
        <Download closeMenu={handleClose.bind(this)} />
        <Edit closeMenu={handleClose.bind(this)} />
        <Share closeMenu={handleClose.bind(this)} />
        <SortItems closeMenu={handleClose.bind(this)} />
      </MuiMenu>
    </div>
  )
}
