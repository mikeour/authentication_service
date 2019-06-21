import React, { Component, Fragment } from "react";
import Forbidden from "./Forbidden";
import axios from "axios";

const WithAuth = ComponentToProtect => {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        loading: true
      };
    }

    componentDidMount() {
      axios.get("api/verifyToken").then(res => {
        if (res.status === 200) {
          this.setState({ loading: false });
        }
      });
    }

    render() {
      const { loading } = this.state;
      if (loading) {
        return <Forbidden />;
      }

      return (
        <Fragment>
          <ComponentToProtect {...this.props} />
        </Fragment>
      );
    }
  };
};

export default WithAuth;
