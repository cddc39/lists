import React from "react";
import { useHistory } from "react-router-dom";

import MuiDivider from "@material-ui/core/Divider";
import MuiIconButton from "@material-ui/core/IconButton";
import MuiListItem from "@material-ui/core/ListItem";
import MuiListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";

import MuiAddIcon from "@material-ui/icons/AddCircle";
import MuiEditIcon from "@material-ui/icons/Edit";
import MuiRemoveIcon from "@material-ui/icons/RemoveCircle";

const useStyles = makeStyles((theme) => ({
  text: {
    marginLeft: theme.spacing(2),
  },
}));

export default ({ listId, item, setItemCount }) => {
  if (!item) {
    return <div />;
  }

  const classes = useStyles();
  const history = useHistory();

  const handleAdd = (listId, item) => {
    const count = item.count + 1;
    return () => setItemCount(listId, item.id, count);
  };

  const handleClick = (item) => {
    return () => history.push(`#edit-item-${item.name}`);
  };

  const handleSub = (listId, item) => {
    const count = Math.max(1, item.count - 1);
    return () => setItemCount(listId, item.id, count);
  };

  const crossoffItem = (listId, item) => {
    return () => console.log("Cross off item", item);
  };

  return (
    <div>
      <MuiListItem button>
        <MuiIconButton
          color="secondary"
          onClick={handleSub(listId, item)}
          size="small"
        >
          <MuiRemoveIcon />
        </MuiIconButton>
        <MuiIconButton
          color="primary"
          onClick={handleAdd(listId, item)}
          size="small"
        >
          <MuiAddIcon />
        </MuiIconButton>
        <MuiListItemText
          onClick={crossoffItem(listId, item)}
          className={classes.text}
          primary={`${item.count} ${item.name}`}
        />
        <MuiIconButton
          aria-controls="edit"
          aria-describedby="edit"
          aria-haspopup="true"
          aria-label="edit"
          onClick={handleClick(item)}
          edge="end"
          size="small"
        >
          <MuiEditIcon />
        </MuiIconButton>
      </MuiListItem>
      <MuiDivider />
    </div>
  );
};
