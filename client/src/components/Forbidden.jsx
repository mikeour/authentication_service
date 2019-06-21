import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Forbidden = () => (
  <Fragment>
    <h1>Sorry!</h1>
    <p>
      You do not have access. Please <Link to="/login">login</Link> to view this
      content.
    </p>
  </Fragment>
);

export default Forbidden;
