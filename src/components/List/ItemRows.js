import React from "react";

import MuiList from "@material-ui/core/List";

import ItemRow from "./ItemRow";

export default ({ listId, items, setItemCount }) => {
  if (!items) {
    return <div />;
  }

  return (
    <main>
      <MuiList component="nav">
        {items.map((item) => {
          return (
            <ItemRow
              item={item}
              key={item.id}
              listId={listId}
              setItemCount={setItemCount}
            />
          );
        })}
      </MuiList>
    </main>
  );
};
