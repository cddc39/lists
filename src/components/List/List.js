import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";

import AddItem from "./AddItem";
import Header from "../Header";
import HeaderMenu from "./HeaderMenu/";
import ItemRows from "./ItemRows";
import { Loading } from "../Loading";

import MuiBackIcon from "@material-ui/icons/ArrowBack";

const List = ({ errMsg, isLoading, list, setItemCount }) => {
  if (isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  }

  if (errMsg) {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>{errMsg}</h4>
          </div>
        </div>
      </div>
    );
  }

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
  if (!lists) {
    return <Redirect to="/" />;
  }

  const list = lists.filter((list) => list.path === path)[0];
  if (!list) {
    return <Redirect to="/" />;
  }

  useEffect(() => {
    document.title = list.name;
  });

  return <List list={list} setItemCount={setItemCount} />;
};
