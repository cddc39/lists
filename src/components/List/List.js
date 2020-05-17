import React, { useEffect } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Edit from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import IconAdd from "@material-ui/icons/AddCircle";
import IconRemove from "@material-ui/icons/RemoveCircle";
import Header from "./Header";
import NewItem from "./NewItem";

function RenderListItem({ item, setItemCount }) {
  if (!item) {
    return <div />;
  }

  const handleAdd = (item) => {
    const count = item.count + 1;
    return () => setItemCount(item.id, count);
  };

  const handleSub = (item) => {
    const count = Math.max(1, item.count - 1);
    return () => setItemCount(item.id, count);
  };

  const crossoffItem = (item) => {
    return () => console.log("Cross off item", item);
  };

  return (
    <ListItem button>
      <IconButton color="secondary" onClick={handleSub(item)} size="small">
        <IconRemove />
      </IconButton>
      <IconButton color="primary" onClick={handleAdd(item)} size="small">
        <IconAdd />
      </IconButton>
      <ListItemText
        onClick={crossoffItem(item)}
        className="ml-2"
        primary={`${item.count} ${item.name}`}
      />
      <Link href={`#edit-item`}>
        <IconButton
          aria-controls="menu"
          aria-describedby="menu"
          aria-haspopup="true"
          aria-label="menu"
          color="inherit"
          // onClick={handleClick}
          edge="end"
          size="small"
        >
          <Edit />
        </IconButton>
      </Link>
    </ListItem>
  );
}

function RenderListItems({ items, setItemCount }) {
  if (!items) {
    return <div />;
  }

  return items.map((item, i) => {
    return (
      <div key={i}>
        <RenderListItem item={item} setItemCount={setItemCount} />
        <Divider />
      </div>
    );
  });
}

export default ({ list, items, setItemCount }) => {
  useEffect(() => {
    document.title = list.name;
  });

  if (!list) {
    return <div />;
  }

  return (
    <div>
      <Header title={list.name} />
      <main>
        <List component="nav">
          <RenderListItems items={items} setItemCount={setItemCount} />
        </List>
      </main>
      <NewItem />
    </div>
  );
};
