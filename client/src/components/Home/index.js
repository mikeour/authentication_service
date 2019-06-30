import React, { useState, useEffect } from "react";
import { P } from "../../shared/styles/";
import axios from "axios";

const Home = () => {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    axios.get("/api/home").then(({ data: msg }) => {
      setMessage(msg);
    });
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <P>{message}</P>
    </div>
  );
};

export default Home;
