import React from "react";

import MuiDivider from "@material-ui/core/Divider";
import MuiList from "@material-ui/core/List";
import MuiListItem from "@material-ui/core/ListItem";
import MuiListItemIcon from "@material-ui/core/ListItemIcon";
import MuiListItemText from "@material-ui/core/ListItemText";

import MuiAccountIcon from "@material-ui/icons/AccountCircle";
import MuiDeleteForeverIcon from "@material-ui/icons/DeleteForever";
import MuiDownloadIcon from "@material-ui/icons/CloudDownload";
import MuiLoginIcon from "@material-ui/icons/VpnKey";
import MuiBackIcon from "@material-ui/icons/ArrowBack";

import Header from "../Header";

export default () => {
  const exportToJson = (objectData) => {
    let filename = "lists.json";
    let contentType = "application/json;charset=utf-8;";
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      var blob = new Blob(
        [decodeURIComponent(encodeURI(JSON.stringify(objectData)))],
        { type: contentType }
      );
      navigator.msSaveOrOpenBlob(blob, filename);
    } else {
      var a = document.createElement("a");
      a.download = filename;
      a.href =
        "data:" +
        contentType +
        "," +
        encodeURIComponent(JSON.stringify(objectData));
      a.target = "_blank";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  return (
    <div>
      <Header icon={<MuiBackIcon />} title="Account" />
      <MuiList component="nav">
        <MuiListItem>
          <MuiListItemIcon>
            <MuiAccountIcon />
          </MuiListItemIcon>
          <MuiListItemText primary="You are not logged in" />
        </MuiListItem>
        <MuiDivider />
        <MuiListItem button>
          <MuiListItemIcon>
            <MuiLoginIcon />
          </MuiListItemIcon>
          <MuiListItemText primary="Login" />
        </MuiListItem>
        <MuiDivider />
        <MuiListItem
          button
          onClick={() => {
            exportToJson({ test: true });
          }}
        >
          <MuiListItemIcon>
            <MuiDownloadIcon />
          </MuiListItemIcon>
          <MuiListItemText primary="Download all data" />
        </MuiListItem>
        <MuiDivider />
        <MuiListItem button>
          <MuiListItemIcon>
            <MuiDeleteForeverIcon />
          </MuiListItemIcon>
          <MuiListItemText primary="Delete all data" />
        </MuiListItem>
        <MuiDivider />
      </MuiList>
    </div>
  );
};
