import React from "react";

import MuiChip from "@material-ui/core/Chip";
import MuiDivider from "@material-ui/core/Divider";
import MuiLink from "@material-ui/core/Link";
import MuiListItem from "@material-ui/core/ListItem";
import MuiListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  itemChip: {
    marginRight: theme.spacing(2),
  },
}));

export default ({ list }) => {
  if (!list) {
    return <div />;
  }

  const classes = useStyles();

  return (
    <div>
      <MuiLink href={`/list/${list.path}`}>
        <MuiListItem button>
          <MuiChip
            className={classes.itemChip}
            clickable
            color="secondary"
            label={`${list.items.length}`}
          />
          <MuiListItemText primary={list.name} />
        </MuiListItem>
      </MuiLink>
      <MuiDivider />
    </div>
  );
};
