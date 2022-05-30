import React from "react";
import { render } from "react-dom";
import Shop from "./Shop.js";
import GlobalStyle from "./theme/GlobalStyle.js";

function App() {
  return (
    <>
      <GlobalStyle />
      <Shop />
    </>
  );
}

render(<App />, document.querySelector("#root"));
