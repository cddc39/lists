import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";

import Header from "../Header";
import HeaderMenu from "./HeaderMenu/";
import ItemRows from "./ItemRows";
import AddItem from "./AddItem";

import MuiBackIcon from "@material-ui/icons/ArrowBack";

const List = ({ list, setItemCount }) => {
  return (
    <div>
      <Header icon={<MuiBackIcon />} title={list.name} menu={<HeaderMenu />} />
      <ItemRows
        items={list.items}
        listId={list.id}
        setItemCount={setItemCount}
      />
      <AddItem />
    </div>
  );
};

export default ({ lists, path, setItemCount }) => {
  const list = lists.filter((list) => list.path === path)[0];
  if (!list) {
    return <Redirect to="/" />;
  }

  useEffect(() => {
    document.title = list.name;
  });

  return <List list={list} setItemCount={setItemCount} />;
};
