import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

const Secret = () => {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    axios.get("/api/secret").then(({ data: msg }) => {
      setMessage(msg);
    });
  }, []);

  return (
    <div>
      <h1>Secret</h1>
      {message}
    </div>
  );
};

export default Secret;
