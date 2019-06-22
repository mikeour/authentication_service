import React, { useState, useEffect } from "react";
import axios from "axios";

const Info = () => {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    axios.get("/api/verifyToken").then(({ data: name }) => {
      setUsername(name);
    });
  });

  if (!username) {
    return <span>You are not logged in. </span>;
  }

  return <span>You are currently logged in as {username}.</span>;
};

export default Info;
