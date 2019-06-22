import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";

const Info = () => {
  const { username } = useContext(AuthContext);

  if (!username) {
    return <span>You are not logged in.</span>;
  }

  return <span>You are currently logged in as {username}.</span>;
};

export default Info;
