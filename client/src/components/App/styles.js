import styled, { createGlobalStyle } from "styled-components";

const GlobalStyling = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
`;

const Div = styled.div`
  max-width: 1100px;
  margin: auto;
  overflow: hidden;
  padding: 0 2rem;
  text-align: center;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
`;

const Li = styled.li`
  padding: 10px;
`;

export { GlobalStyling, Div, Ul, Li };
