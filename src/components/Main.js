import React from "react";
import Header from "./Header";
import Lists from "./Lists";
import List from "./List";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setItemCount } from "../redux/ActionCreators";

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
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Lists lists={lists} items={items} />}
        />
        <Route path="/list/:listPath" component={ListPath} />
        <Redirect to="/" />
      </Switch>

      {/* <!-- Floating action button --> */}
      {/* <div class="fab-br">
        <button class="btn btn-float btn-primary btn-sm" type="button">
          <i class="material-icons">add</i>
        </button>
      </div> */}

      {/* <!-- build:js js/main.js --> */}
      {/* <!-- jQuery, Popper.js, and Bootstrap JS --> */}
      {/* <script src="node_modules/jquery/dist/jquery.slim.min.js"></script>
      <script src="node_modules/popper.js/dist/umd/popper.min.js"></script>
      <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script> */}

      {/* <!-- Then Material JavaScript --> */}
      {/* <script src="node_modules/daemonite-material/js/material.min.js"></script> */}

      {/* <!-- Custom JS --> */}
      {/* <script src="./scripts.js"></script> */}
      {/* <!-- endbuild --> */}
    </div>
  );
}
