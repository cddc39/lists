import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";

import AddItem from "./AddItem";
import Header from "../Header";
import HeaderMenu from "./HeaderMenu/";
import ItemRows from "./ItemRows";
import { Loading } from "../Loading";

import MuiBackIcon from "@material-ui/icons/ArrowBack";

const List = ({ error, loading, list, setItemCount }) => {
  console.log("here");
  if (loading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>{error}</h4>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header icon={<MuiBackIcon />} menu={<HeaderMenu />} title={list.name} />
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
