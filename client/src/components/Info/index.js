import React from "react";

const Info = ({ globalUsername }) => {
  if (!globalUsername) {
    return (
      <span className="justify-content-center">You are not logged in.</span>
    );
  }

  if (globalUsername === "Incorrect password!") {
    return (
      <span className="justify-content-center">
        Sorry, wrong password. Please try again.
      </span>
    );
  }

  return (
    <span className="justify-content-center">
      You are currently logged in as {globalUsername}.
    </span>
  );
};

export default Info;
