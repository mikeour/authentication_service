import React, { useState } from "react";
import { Form, Input, Submit, H1 } from "../../shared/styles/";
import axios from "axios";

const Login = ({ setGlobalUsername }) => {
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
    axios
      .post("/api/authenticate", { username, password })
      .then(({ data: name }) => {
        setGlobalUsername(name);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <H1>Login</H1>
      <Input
        type="text"
        name="username"
        placeholder="Enter username"
        value={username}
        onChange={handleUsername}
        required
      />
      <Input
        type="password"
        name="password"
        placeholder="Enter password"
        value={password}
        onChange={handlePassword}
        required
      />
      <Submit type="submit" value="Submit" />
    </Form>
  );
};

export default Login;
