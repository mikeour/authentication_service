import React from "react";

const Info = ({ globalUsername }) => {
  if (!globalUsername) {
    return <span>You are not logged in.</span>;
  }

  return <span>You are currently logged in as {globalUsername}.</span>;
};

export default Info;
