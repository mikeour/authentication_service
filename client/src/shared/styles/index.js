import styled, { createGlobalStyle } from "styled-components";

const GlobalStyling = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
`;

const H1 = styled.h1`
  padding: 7px;
`;

const Form = styled.form`
  border: 3px solid #666161;
  padding: 40px;
  border-radius: 25px;
`;

const Input = styled.input`
  width: 85%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: 1px solid black;
  border-radius: 2px;
  background: #f1f1f1;

  :focus {
    background-color: #ddd;
    outline: none;
  }
`;

const Submit = styled.input`
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 60%;
  opacity: 0.9;

  :hover {
    opacity: 1;
  }
`;

export { GlobalStyling, H1, Form, Input, Submit };
