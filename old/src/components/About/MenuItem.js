import React from "react"
import { useHistory } from "react-router-dom"

import MuiMenuItem from "@material-ui/core/MenuItem"
import { makeStyles } from "@material-ui/core/styles"

import MuiInfoIcon from "@material-ui/icons/Info"

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
}))

export default ({ closeMenu }) => {
  const classes = useStyles()
  const history = useHistory()

  const handleClick = () => {
    closeMenu()
    history.push("/about")
  }

  return (
    <MuiMenuItem onClick={handleClick}>
      <MuiInfoIcon className={classes.icon} />
      About
    </MuiMenuItem>
  )
}
