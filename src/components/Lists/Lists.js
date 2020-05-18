import React, { useEffect } from "react";

import MuiList from "@material-ui/core/List";

import Header from "./Header/";
import ListNames from "./ListNames";
import AddList from "./AddList";

export default ({ lists }) => {
  useEffect(() => {
    document.title = "Lists";
  });

  return (
    <div>
      <Header />
      <main>
        <MuiList component="nav">
          <ListNames lists={lists} />
        </MuiList>
      </main>
      <AddList />
    </div>
  );
};
