import React from "react"

import MuiDivider from "@material-ui/core/Divider"
import MuiList from "@material-ui/core/List"
import MuiListIcon from "@material-ui/icons/List"
import MuiListItem from "@material-ui/core/ListItem"
import MuiListItemIcon from "@material-ui/core/ListItemIcon"
import MuiListItemText from "@material-ui/core/ListItemText"

import MuiCodeIcon from "@material-ui/icons/Code"
import MuiBackIcon from "@material-ui/icons/ArrowBack"

import Header from "../Header"

export default () => {
  const navGitlab = () => {
    window.location.href = "https://gitlab.com/dmikalova/lists"
  }

  return (
    <div>
      <Header icon={<MuiBackIcon />} title="About" />
      <MuiList component="nav">
        <MuiListItem>
          <MuiListItemIcon>
            <MuiListIcon />
          </MuiListItemIcon>
          <MuiListItemText primary="Version" secondary="0.0.1" />
        </MuiListItem>
        <MuiDivider />
        <MuiListItem button onClick={navGitlab}>
          <MuiListItemIcon>
            <MuiCodeIcon />
          </MuiListItemIcon>
          <MuiListItemText primary="Source Code" />
        </MuiListItem>
        <MuiDivider />
      </MuiList>
    </div>
  )
}
