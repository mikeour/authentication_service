import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Logout extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    axios.get("/api/removeToken");
  }

  render() {
    return (
      <Fragment>
        <h1>Goodbye!</h1>
        <p>
          You have successfully logged out. Click <Link to="/">here</Link> to
          return to the home page.
        </p>
      </Fragment>
    );
  }
}

export default Logout;
