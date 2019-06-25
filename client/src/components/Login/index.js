import React, { useState } from "react";
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
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <h1>Login Below!</h1>
        <input
          type="text"
          className="form-control"
          name="username"
          placeholder="Enter username"
          value={username}
          onChange={handleUsername}
          required
        />
        <input
          type="text"
          name="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={handlePassword}
          required
        />

        <input
          type="submit"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModalCenter"
          value="Submit"
        />

        <div
          className="modal fade"
          id="exampleModalCenter"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                {/* <h5 className="modal-title" id="exampleModalCenterTitle">
                  Congratulations
                </h5> */}
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">You have logged in!</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
