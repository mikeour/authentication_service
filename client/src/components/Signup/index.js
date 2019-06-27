import React, { useState } from "react";
import { Form, Input, Submit, H1 } from "../../shared/styles/";
import axios from "axios";

const Signup = ({ setGlobalUsername }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const resetValues = () => {
    setUsername("");
    setPassword("");
    setRepeatPassword("");
  };

  const handleChange = (e, func) => {
    const { value } = e.target;
    func(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (password === repeatPassword) {
      axios.post("/api/register", { username, password }).then(() => {
        setGlobalUsername("Success. Account created");
        resetValues();
      });
    } else {
      setGlobalUsername("Passwords do not match");
      resetValues();
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
      <Input
        type="password"
        name="password"
        placeholder="Repeat password here"
        value={repeatPassword}
        onChange={e => handleChange(e, setRepeatPassword)}
        required
      />
      <Submit type="submit" value="Submit" />
    </Form>
  );
};

export default Signup;
