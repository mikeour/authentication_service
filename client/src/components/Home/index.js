import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    axios.get("/api/home").then(({ data: msg }) => {
      setMessage(msg);
    });
  }, []);

  return (
    <div className="jumbotron">
      <h1 className="display-4">Welcome!</h1>
      <p className="lead">This is my Authentication App.</p>
      <hr className="my-4" />
      <p>Please login to see secret content.</p>
      <button className="btn btn-link btn-lg" role="button">
        <Link to="/login">Login</Link>
      </button>
    </div>
  );
};

export default Home;
