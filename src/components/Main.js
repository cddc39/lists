import React from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

import About from "./About/";
import List from "./List/";
import Lists from "./Lists/";
import { setItemCount } from "../redux/ActionCreators";

const mapDispatchToProps = {
  setItemCount: (itemId, count) => setItemCount(itemId, count),
};

const mapStateToProps = (state) => {
  return {
    lists: state.lists,
  };
};

function Main({ lists, items, setItemCount }) {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Lists lists={lists} />}
        />
        <Route
          path="/list/:listPath"
          render={({ match }) => (
            <List
              lists={lists}
              path={match.params.listPath}
              setItemCount={setItemCount}
            />
          )}
        />
        <Route path="/about" component={About} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
