import React from "react";
import { Span } from "./styles";

const Info = ({ globalUsername }) => {
  if (!globalUsername) {
    return <Span>You are not logged in.</Span>;
  }

  if (globalUsername === "Incorrect password!") {
    return <Span>Sorry, wrong password. Please try again.</Span>;
  }

  return <Span>You are currently logged in as {globalUsername}.</Span>;
};

export default Info;
