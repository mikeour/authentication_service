import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Logout = ({ setGlobalUsername }) => {
  useEffect(() => {
    axios.get("api/removeToken").then(() => {
      setGlobalUsername(null);
    });
  }, []);

  return (
    <Fragment>
      <h1>Goodbye!</h1>
      <p>
        You have successfully logged out. Click <Link to="/">here</Link> to
        return to the home page.
      </p>
    </Fragment>
  );
};

export default Logout;
