import React, { useState } from "react";
import { Form, Input, Submit, H1 } from "../../shared/styles/";
import axios from "axios";

const Signup = ({ setGlobalUsername }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleUsername = e => {
    const { value } = e.target;
    setUsername(value);
  };

  const handlePassword = e => {
    const { value } = e.target;
    setPassword(value);
  };

  const handleRepeatPassword = e => {
    const { value } = e.target;
    setRepeatPassword(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (password === repeatPassword) {
      axios.post("/api/register", { username, password }).then(() => {
        setGlobalUsername("Sucess. Account created");
        setUsername("");
        setPassword("");
        setRepeatPassword("");
      });
    } else {
      setGlobalUsername("Passwords do not match");
      setUsername("");
      setPassword("");
      setRepeatPassword("");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <H1>Signup</H1>
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
      <Input
        type="password"
        name="password"
        placeholder="Repeat password here"
        value={repeatPassword}
        onChange={handleRepeatPassword}
        required
      />
      <Submit type="submit" value="Submit" />
    </Form>
  );
};

export default Signup;
