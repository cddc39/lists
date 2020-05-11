import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Edit from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import IconAdd from "@material-ui/icons/AddCircle";
import IconRemove from "@material-ui/icons/RemoveCircle";

export default ({ list }) => {
  if (!list) {
    return <div />;
  }

  useEffect(() => {
    document.title = list.name;
  });

  return (
    <main>
      {/* <!-- Items list --> */}
      <div class="font-weight-bold list-group list-group-flush">
        {/* <!-- avocadoes --> */}
        <a class="list-group-item-custom" id="avocadoes-item">
          <span
            class="badge badge-pill badge-secondary pill-sub"
            id="avocadoes-sub"
          >
            <i class="material-icons small">remove</i>
          </span>
          <span
            class="badge badge-pill badge-secondary pill-add"
            id="avocadoes-add"
          >
            <i class="material-icons small">add</i>
          </span>
          <span href="#avocadoes" class="flex-grow-1 mx-3 remove-link">
            <span id="avocadoes-count">2</span> Hass avocadoes
          </span>
          <span class="fab-inline" id="avocadoes-edit">
            <i class="material-icons">create</i>
          </span>
        </a>
        {/* <!-- tomatoes --> */}
        <a class="list-group-item-custom" id="tomatoes-item">
          <span
            class="badge badge-pill badge-secondary pill-sub"
            id="tomatoes-sub"
          >
            <i class="material-icons small">remove</i>
          </span>
          <span
            class="badge badge-pill badge-secondary pill-add"
            id="tomatoes-add"
          >
            <i class="material-icons small">add</i>
          </span>
          <span href="#tomatoes" class="flex-grow-1 mx-3 remove-link">
            <span id="tomatoes-count">3</span> tomatoes
          </span>
          <span class="fab-inline" id="tomatoes-edit">
            <i class="material-icons">create</i>
          </span>
        </a>
        {/* <!-- onions --> */}
        <a class="list-group-item-custom" id="onions-item">
          <span
            class="badge badge-pill badge-secondary pill-sub"
            id="onions-sub"
          >
            <i class="material-icons small">remove</i>
          </span>
          <span
            class="badge badge-pill badge-secondary pill-add"
            id="onions-add"
          >
            <i class="material-icons small">add</i>
          </span>
          <span href="#onions" class="flex-grow-1 mx-3 remove-link">
            <span id="onions-count">5</span> medium white onions
          </span>
          <span class="fab-inline" id="onions-edit">
            <i class="material-icons">create</i>
          </span>
        </a>
        {/* <!-- yogurt --> */}
        <a class="list-group-item-custom" id="yogurt-item">
          <span
            class="badge badge-pill badge-secondary pill-sub"
            id="yogurt-sub"
          >
            <i class="material-icons small">remove</i>
          </span>
          <span
            class="badge badge-pill badge-secondary pill-add"
            id="yogurt-add"
          >
            <i class="material-icons small">add</i>
          </span>
          <span href="#yogurt" class="flex-grow-1 mx-3 remove-link">
            <span id="yogurt-count">4</span> yogurts
          </span>
          <span class="fab-inline" id="yogurt-edit">
            <i class="material-icons">create</i>
          </span>
        </a>
      </div>

      {/* <!-- Floating action button --> */}
      <div class="fab-br">
        <button
          class="btn btn-float btn-primary btn-sm"
          data-toggle="tooltip"
          data-placement="top"
          title="Add item"
          type="button"
        >
          <i class="material-icons">add</i>
        </button>
      </div>

      <List component="nav">
        <RenderListItems items={list.items} />
      </List>
    </main>
  );
};

function RenderListItem({ item }) {
  if (!item) {
    return <div />;
  }

  return (
    <ListItem button>
      <IconButton color="secondary" size="small">
        <IconRemove />
      </IconButton>
      <IconButton color="primary" size="small">
        <IconAdd />
      </IconButton>
      <ListItemText className="ml-2" primary={`${item.count} ${item.name}`} />
      <Link href={`#edit-item`}>
        <IconButton
          aria-controls="menu"
          aria-describedby="menu"
          aria-haspopup="true"
          aria-label="menu"
          color="inherit"
          // onClick={handleClick}
          edge="end"
          size="small"
        >
          <Edit />
        </IconButton>
      </Link>
    </ListItem>
  );
}

function RenderListItems({ items }) {
  if (!items) {
    return <div />;
  }

  return items.map((item, i) => {
    return (
      <div key={i}>
        <RenderListItem item={item} />
        <Divider />
      </div>
    );
  });
}
