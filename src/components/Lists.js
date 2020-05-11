import React, { useEffect } from "react";
import Chip from "@material-ui/core/Chip";
import Divider from "@material-ui/core/Divider";
import Link from "@material-ui/core/Link";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

function RenderListName({ list }) {
  if (!list) {
    return <div />;
  }

  return (
    <Link href={`/list/${list.path}`}>
      <ListItem button>
        <ListItemText primary={list.name} />
        {/* TODO: plural/singular items depending on count */}
        <Chip
          clickable
          color="secondary"
          label={`${list.items.length} items`}
        />
      </ListItem>
    </Link>
  );
}

function RenderListNames({ lists }) {
  if (!lists) {
    return <div />;
  }

  return lists.map((list) => {
    return (
      <div key={list.id}>
        <RenderListName list={list} />
        <Divider />
      </div>
    );
  });
}

export default function Lists(props) {
  useEffect(() => {
    document.title = "Lists";
  });

  return (
    <main>
      <List component="nav">
        <RenderListNames lists={props.lists} />
      </List>
    </main>
  );
}
