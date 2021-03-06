import React from "react"
import { useHistory } from "react-router-dom"

import MuiMenuItem from "@material-ui/core/MenuItem"
import { makeStyles } from "@material-ui/core/styles"

import MuiAccountIcon from "@material-ui/icons/AccountCircle"

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
}))

export default React.forwardRef(({ closeMenu }, ref) => {
  const classes = useStyles()
  const history = useHistory()

  const handleClick = () => {
    closeMenu()
    history.push("/account")
  }

  return (
    <MuiMenuItem onClick={handleClick} ref={ref}>
      <MuiAccountIcon className={classes.icon} />
      Account
    </MuiMenuItem>
  )
})
