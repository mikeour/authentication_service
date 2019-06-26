import styled, { createGlobalStyle } from "styled-components";

const GlobalStyling = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
`;

const Form = styled.form`
  border: 3px solid #f1f1f1;
`;

export { GlobalStyling, Form };
