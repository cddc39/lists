import React from "react";
import "./styles/lists.scss";
import Theme from "./ui/theme";
import Body from "./components/Body";

function App() {
  return (
    <div className="App">
      <Theme>
        <Body></Body>
      </Theme>
    </div>
  );
}

export default App;
