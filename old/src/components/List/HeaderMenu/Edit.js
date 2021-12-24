import React from "react"
import { useHistory } from "react-router-dom"

import MuiMenuItem from "@material-ui/core/MenuItem"
import { makeStyles } from "@material-ui/core/styles"

import MuiEditIcon from "@material-ui/icons/Edit"

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
    history.push(`#edit-list`)
  }

  return (
    <MuiMenuItem onClick={handleClick}>
      <MuiEditIcon className={classes.icon} />
      Edit list
    </MuiMenuItem>
  )
}
