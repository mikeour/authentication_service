import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = e => {
    const { name } = e.target;
    setUsername(name);
  };

  const handlePassword = e => {
    const { name } = e.target;
    setPassword(name);
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert("Authentication coming soon!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login Below!</h1>
      <input
        type="username"
        name="username"
        placeholder="Enter username"
        value={username}
        onChange={handleUsername}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Enter password"
        value={password}
        onChange={handlePassword}
        required
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Login;
