import React, { useState, useEffect } from "react";
import { P } from "../../shared/styles/";
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
      <P>{message}</P>
    </div>
  );
};

export default Secret;
