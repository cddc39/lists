import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";

import Main from "./components/Main";
import { ConfigureStore } from "./redux/configureStore";
import Theme from "./ui/theme";

const store = ConfigureStore();

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Provider store={store}>
        <BrowserRouter>
          <Theme>
            <Main />
          </Theme>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
