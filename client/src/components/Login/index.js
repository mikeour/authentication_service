import React, { useState } from "react";
import { Form, Input, Submit, H1 } from "../../shared/styles/";
import axios from "axios";

const Login = ({ setGlobalUsername }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const resetValues = () => {
    setUsername("");
    setPassword("");
  };

  const handleChange = (e, func) => {
    const { value } = e.target;
    func(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("/api/authenticate", { username, password })
      .then(({ data: name }) => {
        setGlobalUsername(name);
      })
      .then(() => {
        resetValues();
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
        onChange={e => handleChange(e, setUsername)}
        required
      />
      <Input
        type="password"
        name="password"
        placeholder="Enter password"
        value={password}
        onChange={e => handleChange(e, setPassword)}
        required
      />
      <Submit type="submit" value="Submit" />
    </Form>
  );
};

export default Login;
