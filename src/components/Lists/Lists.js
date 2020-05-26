import React, { useEffect } from "react";
import { connect } from "react-redux";

import MuiListIcon from "@material-ui/icons/List";

import AddList from "./AddList";
import Header from "../Header/";
import HeaderMenu from "./HeaderMenu";
import ListRows from "./ListRows";
import { Loading } from "../Loading";

import { fetchLists } from "../../redux/ActionCreators";

const mapDispatchToProps = {
  fetchLists: () => fetchLists(),
};

const mapStateToProps = (state) => ({
  error: state.lists.error,
  loading: state.lists.loading,
  lists: state.lists.lists,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(({ error, fetchLists, loading, lists }) => {
  const title = "Lists";
  useEffect(() => {
    document.title = title;
  });

  useEffect(() => {
    fetchLists();
  }, [fetchLists]);

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
      <Header icon={<MuiListIcon />} menu={<HeaderMenu />} title={title} />
      <ListRows lists={lists} />
      <AddList />
    </div>
  );
});
