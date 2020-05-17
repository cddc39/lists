import React from "react";
import Lists from "./Lists/Lists";
import List from "./List/List";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setItemCount } from "../redux/ActionCreators";
import About from "./About/About";

const mapStateToProps = (state) => {
  return {
    items: state.items,
    lists: state.lists,
  };
};

const mapDispatchToProps = {
  setItemCount: (itemId, count) => setItemCount(itemId, count),
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

function Main({ lists, items, setItemCount }) {
  const listItems = (list) => {
    return list.itemIds.map((itemId) => {
      const i = items.findIndex((x) => x.id === itemId);
      return items[i];
    });
  };

  const ListPath = ({ match }) => {
    const list = lists.filter((list) => list.path === match.params.listPath)[0];
    if (!list) {
      return <Redirect to="/" />;
    }

    const items = listItems(list);

    return <List list={list} items={items} setItemCount={setItemCount} />;
  };

  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Lists lists={lists} items={items} />}
        />
        <Route path="/list/:listPath" component={ListPath} />
        <Route path="/about" component={About} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}
