import React, { useEffect } from "react";

import AddList from "./AddList";
import Header from "../Header/";
import HeaderMenu from "./HeaderMenu";
import ListRows from "./ListRows";
import { Loading } from "../Loading";

import MuiListIcon from "@material-ui/icons/List";

export default ({ errMsg, isLoading, lists }) => {
  const title = "Lists";
  useEffect(() => {
    document.title = title;
  });

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
      <Header icon={<MuiListIcon />} menu={<HeaderMenu />} title={title} />
      <ListRows lists={lists} />
      <AddList />
    </div>
  );
};
