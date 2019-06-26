import { createGlobalStyle } from "styled-components";

const GlobalStyling = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
`;

export { GlobalStyling };
