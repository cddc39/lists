import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import MuiBackIcon from "@material-ui/icons/ArrowBack";

import AddItem from "./AddItem";
import Header from "../Header";
import HeaderMenu from "./HeaderMenu/";
import ItemRows from "./ItemRows";
import { Loading } from "../Loading";
import { fetchLists, setItemCount } from "../../redux/ActionCreators";

const mapDispatchToProps = {
  fetchLists: () => fetchLists(),
  setItemCount: (listId, itemId, count) => setItemCount(listId, itemId, count),
};

const mapStateToProps = (state) => ({
  error: state.lists.error,
  loading: state.lists.loading,
  lists: state.lists.lists,
});

const List = ({ list, setItemCount }) => {
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(({ error, fetchLists, loading, lists, path, setItemCount }) => {
  useEffect(() => {
    fetchLists();
  }, [fetchLists]);

  const list = lists.filter((list) => list.path === path)[0];
  useEffect(() => {
    if (!list) {
      return;
    }
    document.title = list.name;
  });

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

  if (!lists) {
    return <Redirect to="/" />;
  }

  if (!list) {
    return <Redirect to="/" />;
  }

  return <List list={list} setItemCount={setItemCount} />;
});
