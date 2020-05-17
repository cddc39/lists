import React from "react";
import List from "@material-ui/core/List";
import Link from "@material-ui/core/Link";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import ListIcon from "@material-ui/icons/List";
import CodeIcon from "@material-ui/icons/Code";
import Header from "./Header";

export default () => {
  return (
    <div>
      <Header />
      <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <ListItemText primary="Version" secondary="0.0.1" />
        </ListItem>
        <Divider />
        <Link href="https://gitlab.com/dmikalova/lists">
          <ListItem button>
            <ListItemIcon>
              <CodeIcon />
            </ListItemIcon>
            <ListItemText primary="Source Code" />
          </ListItem>
        </Link>
      </List>
    </div>
  );
};
