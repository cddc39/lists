import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import amber from "@material-ui/core/colors/amber";
import lightGreen from "@material-ui/core/colors/lightGreen";

const theme = createMuiTheme({
  palette: {
    primary: lightGreen,
    secondary: amber,
  },
  themeName: "lists",
});

const Theme = (props) => {
  return (
    <div>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </div>
  );
};

export default Theme;
