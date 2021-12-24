import React from "react"
import { useHistory } from "react-router-dom"

import MuiChip from "@material-ui/core/Chip"
import MuiDivider from "@material-ui/core/Divider"
import MuiListItem from "@material-ui/core/ListItem"
import MuiListItemText from "@material-ui/core/ListItemText"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  itemChip: {
    marginRight: theme.spacing(2),
  },
}))

export default ({ list }) => {
  if (!list) {
    return <div />
  }

  const classes = useStyles()
  const history = useHistory()

  const handleClick = () => {
    history.push(`/list/${list.path}`)
  }

  return (
    <div>
      <MuiListItem button onClick={handleClick}>
        <MuiChip className={classes.itemChip} clickable color="secondary" label={`${list.itemIds.length}`} />
        <MuiListItemText primary={list.name} />
      </MuiListItem>
      <MuiDivider />
    </div>
  )
}
