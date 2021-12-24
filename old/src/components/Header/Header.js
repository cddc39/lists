import React from "react"

import MuiAppBar from "@material-ui/core/AppBar"
import MuiButton from "@material-ui/core/Button"
import MuiIconButton from "@material-ui/core/IconButton"
import MuiToolbar from "@material-ui/core/Toolbar"
import MuiTypography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  spacer: {
    flexGrow: 1,
  },
  title: {
    textTransform: "none",
  },
}))

export default ({ icon, menu, title }) => {
  const classes = useStyles()

  return (
    <header className={classes.root}>
      <MuiAppBar position="static">
        <MuiToolbar>
          <MuiIconButton
            aria-controls="menu"
            aria-describedby="menu"
            aria-haspopup="true"
            aria-label="menu"
            color="inherit"
            edge="start"
            href="/"
          >
            {icon}
          </MuiIconButton>
          <MuiButton href={window.location.pathname}>
            <MuiTypography className={classes.title} variant="h6">
              {title}
            </MuiTypography>
          </MuiButton>
          <div className={classes.spacer} />
          {menu}
        </MuiToolbar>
      </MuiAppBar>
    </header>
  )
}
