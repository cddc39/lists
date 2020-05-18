import React from "react";

import MuiList from "@material-ui/core/List";

import ListName from "./ListName";

export default ({ lists }) => {
  if (!lists) {
    return <div />;
  }

  return (
    <main>
      <MuiList component="nav">
        {lists.map((list) => {
          return <ListName list={list} />;
        })}
      </MuiList>
    </main>
  );
};
