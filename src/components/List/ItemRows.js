import React from "react";
import { connect } from "react-redux";

import MuiList from "@material-ui/core/List";

import ItemRow from "./ItemRow";
import { Loading } from "../Loading";

const mapStateToProps = (state) => ({
  allItems: state.items.items,
  error: state.items.error,
  loading: state.items.loading,
});

const ItemRows = ({ items }) => {
  if (!items) {
    return <div />;
  }

  return (
    <main>
      <MuiList component="nav">
        {items.map((item) => {
          return <ItemRow item={item} key={item.id} />;
        })}
      </MuiList>
    </main>
  );
};

export default connect(mapStateToProps)(
  ({ error, itemIds, allItems, loading }) => {
    const items = allItems.filter((item) => {
      return itemIds.includes(item.id);
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

    return <ItemRows items={items} />;
  }
);
