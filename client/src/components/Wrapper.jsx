import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    height: 100%;
    width: 100%;
    background-color: pink;
  }
`;

const WrapperDiv = styled.div`
  position: absolute;
  height: 75%;
  width: 50%;
  border: 2px solid purple;
`;

const Wrapper = () => {
  return (
    <>
      <WrapperDiv />
      <GlobalStyle />
    </>
  );
};

export default Wrapper;
