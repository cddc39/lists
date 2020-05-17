import React, { useEffect } from "react";
import Chip from "@material-ui/core/Chip";
import Divider from "@material-ui/core/Divider";
import Link from "@material-ui/core/Link";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Header from "./Header";
import NewList from "./NewList";

function RenderListName({ list, items }) {
  if (!list) {
    return <div />;
  }

  return (
    <Link href={`/list/${list.path}`}>
      <ListItem button>
        <ListItemText primary={list.name} />
        {/* TODO: plural/singular items depending on count */}
        <Chip clickable color="secondary" label={`${items.length} items`} />
      </ListItem>
    </Link>
  );
}

function RenderListNames({ lists, items }) {
  if (!lists) {
    return <div />;
  }

  return lists.map((list) => {
    return (
      <div key={list.id}>
        <RenderListName list={list} items={items} />
        <Divider />
      </div>
    );
  });
}

export default function Lists({ lists, items }) {
  useEffect(() => {
    document.title = "Lists";
  });

  return (
    <div>
      <Header />
      <main>
        <List component="nav">
          <RenderListNames lists={lists} items={items} />
        </List>
      </main>
      <NewList />
    </div>
  );
}
