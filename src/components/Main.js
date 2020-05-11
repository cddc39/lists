import React from "react";
import Header from "./Header";
import Lists from "./Lists";
import List from "./List";
import { LISTS } from "../shared/lists";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

export default function Main() {
  const ListPath = ({ match }) => {
    const list = LISTS.filter((list) => list.path === match.params.listPath)[0];
    if (!list) {
      return <Redirect to="/" />;
    }

    return <List list={list} />;
  };

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Lists lists={LISTS} />} />
        <Route
          path="/list/:listPath"
          component={ListPath}
          // render={() => <List list={this.props.list} />}
        />
        <Redirect to="/" />
      </Switch>

      {/* <!-- Sort lists modal --> */}
      {/* <div
        class="modal fade"
        id="sortModal"
        role="dialog"
        aria-labelledby="sortModalLabel"
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal-dialog-centered modal-sm"
          role="document"
        >
          <div class="modal-content">
            <div class="modal-header bg-primary">
              <h5 class="modal-title" id="sortModalLabel">
                Sort lists
              </h5>
              <button
                type="button"
                class="close fab-inline"
                data-dismiss="modal"
                aria-label="Close"
              >
                <i class="material-icons">close</i>
              </button>
            </div>
            <div class="modal-body pt-3">
              <div class="custom-control custom-radio">
                <input
                  type="radio"
                  id="sortAlphaRadio"
                  name="customRadio"
                  class="custom-control-input"
                />
                <label class="custom-control-label" for="sortAlphaRadio">
                  Alphabetically
                </label>
              </div>
              <div class="custom-control custom-radio">
                <input
                  type="radio"
                  id="sortRecentRadio"
                  name="customRadio"
                  class="custom-control-input"
                  checked
                />
                <label class="custom-control-label" for="sortRecentRadio">
                  Recently used
                </label>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-success"
                data-dismiss="modal"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div> */}

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
