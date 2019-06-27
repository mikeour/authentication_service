import React from "react";
import { Link } from "react-router-dom";
import { Span } from "./styles";

const Info = ({ globalUsername }) => {
  if (!globalUsername) {
    return <Span>You are not logged in.</Span>;
  }

  if (globalUsername === "Incorrect password!") {
    return <Span>Sorry, that password is incorrect. Please try again.</Span>;
  }

  if (globalUsername === "Passwords do not match") {
    return <Span>Sorry, those passwords do not match. Please try again.</Span>;
  }

  if (globalUsername === "Success. Account created") {
    return (
      <Span>
        Success! Account created. You can now <Link to="/login">login</Link>.
      </Span>
    );
  }

  return <Span>You are currently logged in as {globalUsername}.</Span>;
};

export default Info;
