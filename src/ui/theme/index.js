import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import secondary from "@material-ui/core/colors/amber";
import primary from "@material-ui/core/colors/lightGreen";

const theme = createMuiTheme({
  palette: {
    primary: primary,
    secondary: secondary,
  },
  themeName: "lists",
});

theme.overrides = {
  ...theme.overrides,
  MuiDialogTitle: {
    ...theme.MuiDialogTitle,
    root: {
      ...theme.root,
      background: theme.palette.primary.main,
    },
  },
};

const Theme = (props) => {
  return (
    <div>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </div>
  );
};

export default Theme;
