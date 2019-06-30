import React, { Fragment } from "react";
import { P } from "../../shared/styles/";
import { Link } from "react-router-dom";

const Forbidden = () => (
  <Fragment>
    <h1>Sorry!</h1>
    <P>
      You do not have access. Please <Link to="/login">login</Link> to view this
      content.
    </P>
  </Fragment>
);

export default Forbidden;
