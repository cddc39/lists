import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

import About from "./About/";
import Account from "./Account/";
import AddList from "./AddList/";
import List from "./List/";
import Lists from "./Lists/";
import { fetchLists, setItemCount } from "../redux/ActionCreators";

const mapDispatchToProps = {
  fetchLists: () => fetchLists(),
  setItemCount: (listId, itemId, count) => setItemCount(listId, itemId, count),
};

const mapStateToProps = (state) => {
  return {
    lists: state.lists,
  };
};

function Main({ lists, fetchLists, setItemCount }) {
  useEffect(() => {
    fetchLists();
  }, [fetchLists]);

  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Lists
              errMsg={lists.errMsg}
              isLoading={lists.isLoading}
              lists={lists.lists}
            />
          )}
        />
        <Route
          path="/list/:listPath"
          render={({ match }) => (
            <List
              errMsg={lists.errMsg}
              isLoading={lists.isLoading}
              lists={lists.lists}
              path={match.params.listPath}
              setItemCount={setItemCount}
            />
          )}
        />
        <Route path="/about" component={About} />
        <Route path="/account" component={Account} />
        <Route path="/add-list" component={AddList} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
