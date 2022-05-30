import { createGlobalStyle, css } from "styled-components";

const tags = css`
  body {
    font-family: Helvetica;
  }
  h3 {
    margin: 0;
    padding: 0;
  }
`;

const ui = css`
  [class^="ui-"] {
    margin: 10px;
  }
  .ui-link {
    text-decoration: none;
    color: var(--primary);
  }

  .ui-title {
    font-family: Helvetica;
  }

  .ui-container {
    padding-top: 5px;
    width: 100vw;
    margin: 0 auto;
  }

  .ui-textfield {
    padding: 12px 10px;
    border-radius: 3px;
    border: 1px solid var(--light-gray);
    font-size: 16px;
  }

  .ui-button {
    background-color: var(--primary);
    color: white;
    border: 0;
    padding: 15px 20px;
    min-width: 150px;
    font-size: 16px;
    border-radius: 3px;
    cursor: pointer;
    transition: opacity 200ms ease-out;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  }

  .ui-button:hover {
    opacity: 0.8;
  }

  .ui-button:disabled {
    opacity: 0.4;
    cursor: disabled;
  }

  .ui-button:active {
    box-shadow: 0 0px rgba(0, 0, 0, 0.2);
    transform: translateY(1px);
  }

  .ui-list {
    list-style: none;
    margin: 0 0 0 0;
    padding: 0 0 0 0;
  }

  .ui-item-list {
    margin-bottom: 80px;
  }
`;

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #0000ff;
    --secondary: #5efc8d;
    --light-gray: #cccccc;
  }
  ${tags};
  ${ui}
`;

export default GlobalStyle;
