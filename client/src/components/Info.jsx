import React from "react";

const Info = ({ username }) => {
  if (!username) {
    return <span>You are not logged in.</span>;
  }

  return <span>You are currently logged in as {username}.</span>;
};

export default Info;
