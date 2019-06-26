import React, { useState } from "react";
import { Form } from "../../shared/styles/";
import axios from "axios";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = e => {
    const { value } = e.target;
    setUsername(value);
  };

  const handlePassword = e => {
    const { value } = e.target;
    setPassword(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post("/api/register", { username, password });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h1>Signup Below!</h1>
      <input
        type="text"
        name="username"
        placeholder="Enter username"
        value={username}
        onChange={handleUsername}
        required
      />
      <input
        type="text"
        name="password"
        placeholder="Enter password"
        value={password}
        onChange={handlePassword}
        required
      />
      <input type="submit" value="Submit" />
    </Form>
  );
};

export default Signup;
