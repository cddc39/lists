import React, { useEffect } from "react";

import Header from "../Header/";
import ListRows from "./ListRows";
import AddList from "./AddList";
import HeaderMenu from "./HeaderMenu";

import MuiListIcon from "@material-ui/icons/List";

export default ({ lists }) => {
  const title = "Lists";
  useEffect(() => {
    document.title = title;
  });

  return (
    <div>
      <Header icon={<MuiListIcon />} menu={<HeaderMenu />} title={title} />
      <ListRows lists={lists} />
      <AddList />
    </div>
  );
};
