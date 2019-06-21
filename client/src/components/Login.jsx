import React, { useState } from "react";

const Login = () => {
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
    alert("Authentication coming soon!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login Below!</h1>
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
    </form>
  );
};

export default Login;
